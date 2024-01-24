import React from "react";
import "./partDay.scss";

interface PartDayProps {
  setPeriod: (value: number) => void;
  period: number;
}

const PartDay: React.FC<PartDayProps> = ({ setPeriod, period }) => {
  const handlePartDay = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    day: number
  ) => {
    e.preventDefault();
    setPeriod(day);
  };

  return (
    <div className="partDay">
      <ul>
        <li
          className={period === 1 ? "liIsSelect" : ""}
          onClick={(e: any) => handlePartDay(e, 1)}
        >
          Matin
        </li>
        <li
          className={period === 2 ? "liIsSelect" : ""}
          onClick={(e: any) => handlePartDay(e, 2)}
        >
          Après-midi
        </li>
        <li
          className={period === 3 ? "liIsSelect" : ""}
          onClick={(e) => handlePartDay(e, 3)}
        >
          Soir
        </li>
      </ul>
    </div>
  );
};

export default PartDay;
