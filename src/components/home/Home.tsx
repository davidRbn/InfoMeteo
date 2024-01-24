import React, { useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import Weather from "../weather/Weather";
import "./home.scss";
// import { codeTemps } from '../codeTemps/CodeTemps'

const Home = () => {
  // console.log(codeTemps.filter((e:any,index:number) => (
  //     e.code === 2
  // )))

  const [insee, setInsee] = useState<string>("");

  return (
    <div className="home">
      <SearchBar setInsee={setInsee} />
      <Weather insee={insee} />
    </div>
  );
};

export default Home;
