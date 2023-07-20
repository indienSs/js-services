import { useEffect, useState } from "react";
import "./styles.css";
import { api } from "../../api";

interface ICarMarks {
  mark: string;
  onChangeMark: (mark: string) => void;
}

const CarMarks = ({ mark, onChangeMark }: ICarMarks) => {
  const [marks, setMarks] = useState<string[]>([]);

  useEffect(() => {
    async function fetchMarks() {
      try {
        const { data } = await api.get<string[]>("/cars/marks");
        if (data) setMarks(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMarks();
  }, []);

  return (
    <div className="CarMarks">
      {marks.map(mark => (
        <p key={mark} onClick={() => onChangeMark(mark)}>
          {mark}
        </p>
      ))}
    </div>
  );
};

export default CarMarks;
