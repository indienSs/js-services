import { useEffect, useState } from "react";
import "./styles.css";
import { api } from "../../api";

interface ICarModels {
  models: string[];
  mark: string;
  onChangeModel: (model: string) => void;
  onRemoveModel: (model: string) => void;
}

const CarModels = ({ models, mark, onChangeModel, onRemoveModel }: ICarModels) => {
  const [apiModels, setApiModels] = useState<string[]>([]);

  useEffect(() => {
    async function fetchModels() {
      try {
        const { data } = await api.get<string[]>(`/cars/models?mark=${mark}`);
        if (data) setApiModels(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchModels();
  }, [mark]);

  const changeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeModel(event.target.value);
  };

  if (!mark) {
    return;
  }

  return (
    <div className="CarModels">
      <div>
        <p>Модель:</p>
        <select value={models.join(",")} onChange={changeSelect}>
          {apiModels.map(element => (
            <option key={element}>{element}</option>
          ))}
        </select>
      </div>
      <div className="">
        <p>Выбраны модели:</p>
        {models.map(element => (
          <div key={element} className="">
            <p>{element}</p>
            <p onClick={() => onRemoveModel(element)}>x</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarModels;
