import mongoose from "mongoose";

const CarsSchema = new mongoose.Schema({
  mark: String,
  model: String,
  drive: String,
  equipmentName: String,
  price: Number,
  engine: {
    power: Number,
    volume: Number,
    transmission: String,
    fuel: String,
  },
});

export const Car = mongoose.model("Stock", CarsSchema);
