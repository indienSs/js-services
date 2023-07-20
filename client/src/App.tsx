import { useEffect, useState } from "react";
import "./App.css";
import CarsTable from "../components/cars-table";
import CarMarks from "../components/car-marks";
import CarModels from "../components/car-models";
import { CarType } from "../types/CarType";

const SERVER_LINK = process.env.SERVER_LINK;

function App() {
  const [page, setPage] = useState(0);
  const [cars, setCars] = useState<CarType[]>([]);
  const [mark, setMark] = useState("");
  const [models, setModels] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      try {
        const { data } = await axios.get(`/cars?page=${page}&mark=${mark}&models=${models.join(",")}`);
        setCars(data);
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div className="App">
      <CarMarks />
      <CarModels />
      <CarsTable cars={cars} />
      <Pagination />
    </div>
  );
}

export default App;
