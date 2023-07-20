import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDb, getDb } from "./db.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

let db;

connectToDb(err => {
  if (!err) {
    app.listen(PORT, () => {
      console.log("server started on port " + PORT);
    });
    db = getDb();
  } else {
    console.log("DB connection error " + err);
  }
});

app.get("/cars", (req, res) => {
  const cars = [];

  let queryParams = {};

  if (req.query.mark) {
    queryParams = { ...req.query.mark };
    if (req.query.models) {
      queryParams = { ...queryParams, models: { $in: req.query.models.split(",") } };
    }
  }

  db.collection("stock")
    .find(queryParams)
    .limit(20)
    .skip(req.query.page * 20)
    .forEach(car => cars.push(car))
    .then(() => {
      res.status(200).json(cars);
    });
});

app.get("/cars/marks", (req, res) => {
  const marks = [];

  db.collection("stock")
    .distinct("mark")
    .forEach(mark => marks.push(mark))
    .then(() => {
      res.status(200).json(marks);
    });
});
