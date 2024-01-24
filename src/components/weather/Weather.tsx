import React, { useEffect, useState } from "react";
import apiMeteo from "../conf/apiMeteo";
import DaySelect from "../daySelect/DaySelect";
import PartDay from "../partDay/PartDay";
import WeatherDisplay from "../weatherDisplay/WeatherDisplay";
import "./weather.scss";

interface WeatherProps {
  insee: string;
}

const Weather: React.FC<WeatherProps> = ({ insee }) => {
  const TOKEN = process.env.REACT_APP_TOKEN;
  const [dataWeather, setdataWeather] = useState<string[]>([]);
  const [dateDay, setDateDay] = useState<number>(0);
  const [period, setPeriod] = useState<number>(2);

  useEffect(() => {
    apiMeteo.get(`forecast/daily?token=${TOKEN}&insee=${insee}`).then((res) => {
      setdataWeather(res.data);
    });
  }, [TOKEN, insee]);

  const selectDay = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    day: number
  ) => {
    e.preventDefault();
    setDateDay(day);
  };

  return (
    <div className="containerWeather">
      <div className="weather">
        <div style={{ width: "12.5%" }}></div>
        <div className="weather-daySelect">
          <DaySelect
            dataWeather={dataWeather}
            selectDay={selectDay}
            dateDay={dateDay}
          />
        </div>
        <div style={{ width: "12.5%" }}></div>

        <div className="weather-display-part">
          <WeatherDisplay insee={insee} period={period} dateDay={dateDay} />
          <PartDay period={period} setPeriod={setPeriod} />
        </div>
        <div style={{ width: "37.5%" }}></div>
      </div>
    </div>
  );
};

export default Weather;
