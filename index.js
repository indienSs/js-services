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

  db.collection("stock")
    .find()
    .limit(20)
    .skip(0)
    .forEach(car => cars.push(car))
    .then(() => {
      res.status(200).json(cars);
    });
});
