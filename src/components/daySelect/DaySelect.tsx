import React from "react";
import "./daySelect.scss";

//   const [dataWeather, setdataWeather] = useState<string[]>([]);
//   const [dateDay, setDateDay] = useState<number>(0);
//   const [period, setPeriod] = useState<number>(2);

interface DaySelectProps {
  dataWeather: any;
  selectDay: (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    value: number
  ) => void;
  dateDay: number;
}

const DaySelect: React.FC<DaySelectProps> = ({
  dataWeather,
  selectDay,
  dateDay,
}) => {
  const convertMonth = (month: number) => {
    switch (month) {
      case 0:
        return "janvier";
      case 1:
        return "fevrier";
      case 2:
        return "mars";
      case 3:
        return "avril";
      case 4:
        return "mai";
      case 5:
        return "juin";
      case 6:
        return "juillet";
      case 7:
        return "août";
      case 8:
        return "septembre";
      case 9:
        return "octobre";
      case 10:
        return "novembre";
      case 11:
        return "décembre";
    }
  };

  const convertDayWeek = (day: number) => {
    let dayMonth = "";
    switch (day) {
      case 0:
        dayMonth = "Dimanche";
        break;
      case 1:
        dayMonth = "Lundi";
        break;
      case 2:
        dayMonth = "Mardi";
        break;
      case 3:
        dayMonth = "Mercredi";
        break;
      case 4:
        dayMonth = "Jeudi";
        break;
      case 5:
        dayMonth = "Vendredi";
        break;
      case 6:
        dayMonth = "Samedi";
        break;
    }
    return dayMonth;
  };
  const date = (date: string): string => {
    const date1 = new Date(`${date}`);
    const dayWeek = convertDayWeek(date1.getDay());
    const dayMonth = date1.getDate();
    const month = convertMonth(date1.getMonth());
    const dateResult = `${dayWeek} ${dayMonth} ${month}`;
    return dateResult;
  };

  return (
    <ul className="daySelect">
       
      {dataWeather.length !== 0
        ? dataWeather?.forecast.map((data: any, index: number) => (
            <li
              className={dateDay === data.day ? "dayIsSelect" : ""}
              key={index}
              onClick={(e) => selectDay(e, data.day)}
            >
              {date(data.datetime)}
              <span className="divisionDay"></span>
            </li>
          ))
        : null}
    </ul>
  );
};

export default DaySelect;
