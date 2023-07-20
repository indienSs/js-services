import { CarType } from "../../types/CarType";
import "./styles.css";

const TableElement = ({ car }: { CarType }) => {
  return (
    <div>
      <p>{car._id}</p>
      <p>
        {car.mark} {car.model}
      </p>
      <p>
        {car.engine.volume} ({car.engine.transmission} л.с.) {car.engine.power}
      </p>
      <p>{car.equipmentName}</p>
      <p>{car.price} P</p>
      <p>{car.createdAt}</p>
    </div>
  );
};

export default TableElement;
