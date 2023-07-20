interface ICarModels {
  models: string[];
  onChangeModel: (model: string) => void;
}

const CarModels = ({ models, onChangeModel }: ICarModels) => {
  return (
    <div>
      <p>Модель:</p>
    </div>
  );
};

export default CarModels;
