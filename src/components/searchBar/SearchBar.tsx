import React, { useEffect, useState } from "react";
import "./searchBar.scss";
import apiMeteo from "../conf/apiMeteo";

interface SearchBarProps {
  setInsee: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setInsee }) => {
  const TOKEN = process.env.REACT_APP_TOKEN;

  const [dataCity, setDataCity] = useState<string[]>([]);
  const [cityValue, setCityValue] = useState<string>("");

  useEffect(() => {
    apiMeteo
      .get(`location/cities?token=${TOKEN}&search=${cityValue}`)
      .then((res) => {
        setDataCity(res.data.cities);
      });
  }, [cityValue, TOKEN]);

  const selectCity = (e: any, insee: string) => {
    e.preventDefault();
    setInsee(insee);
    setCityValue("");
  };

  return (
    <div className="searchBar">
      <form className="form">
        <div className="input-result">
          <input
            type="search"
            placeholder="Ville"
            value={cityValue}
            onChange={(e) => setCityValue(e.target.value)}
          />

          {dataCity.length === 0 ? null : (
            <div className="resultCity">
              {dataCity.map((city: any, index: number) => (
                <div
                  className="sectionResult"
                  key={index}
                  onClick={(e) => selectCity(e, city.insee)}
                >
                  <p>{city.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          {/* <input type="submit" value="Rechercher" className="buttonSearch" /> */}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
