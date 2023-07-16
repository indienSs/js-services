import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

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

app.listen(PORT, () => {
  return console.log("server started on port", PORT);
});