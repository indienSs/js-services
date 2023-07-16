import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { Car } from "./models/Car.js";

dotenv.config();

const PORT = process.env.PORT || 8000;
const DB_LINK = process.env.DB_LINK;

mongoose
  .connect(DB_LINK)
  .then(() => {
    console.log("DB connected");
  })
  .catch(err => {
    console.log("DB error", err);
  });

const app = express();

app.use(cors());
app.use(express.json());

app.get("/cars", (req, res) => {
  Car.find()
    // .where(req.params)
    .limit(20)
    .skip(0)
    .then(cars => res.status(200).json(cars))
    .catch(err => res.status(404).send({ message: err }));
});

app.listen(PORT, () => {
  console.log("server started on port", PORT);
});
