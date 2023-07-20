import { CarType } from "../../types/CarType";
import TableElement from "../table-element";

const CarsTable = ({ cars }: CarType[]) => {
  return (
    <div>
      <div>
        <p>ID</p>
        <p>Марка/модель</p>
        <p>Модификация</p>
        <p>Комплектация</p>
        <p>Стоимость</p>
        <p>Дата создания</p>
      </div>
      <div>
        {cars.map(car => (
          <TableElement key={car._id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarsTable;
