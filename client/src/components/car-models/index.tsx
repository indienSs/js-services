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
      const { data } = await api.get<string[]>(`/models?mark=${mark}`);
      if (data) setApiModels(data);
    }
    fetchModels();
  }, [mark]);

  if (!mark) {
    return;
  }

  return (
    <div>
      <p>Модель:</p>
      <input type="text" />
    </div>
  );
};

export default CarModels;
