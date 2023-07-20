import "./styles.css";

interface ICarMarks {
  mark: string;
  onChangeMark: (mark: string) => void;
}

const CarMarks = ({ mark, onChangeMark }: ICarMarks) => {
  return <div className="CarMarks">Марки машин</div>;
};

export default CarMarks;
