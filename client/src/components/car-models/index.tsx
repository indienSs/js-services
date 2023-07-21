import { useEffect, useState } from "react";
import { api } from "../../api";

interface ICarModels {
  models: string[];
  mark: string;
  onChangeModel: (model: string) => void;
}

const CarModels = ({ models, mark, onChangeModel }: ICarModels) => {
  const [apiModels, setApiModels] = useState<string[]>([]);

  useEffect(() => {
    async function fetchModels() {
      const { data } = await api.get<string[]>(`/cars/models?mark=${mark}`);
      if (data) setApiModels(data);
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
    <div>
      <p>Модель:</p>
      <select value={models.join(",")} onChange={changeSelect}>
        {apiModels.map(element => (
          <option key={element}>{element}</option>
        ))}
      </select>
    </div>
  );
};

export default CarModels;
