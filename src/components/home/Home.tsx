import React, { useEffect, useState } from 'react'
import SearchBar from '../searchBar/SearchBar'
import apiMeteo from '../conf/apiMeteo'
import Weather from '../weather/Weather'
import './home.scss'
// import { codeTemps } from '../codeTemps/CodeTemps'


const Home = () => {



// console.log(codeTemps.filter((e:any,index:number) => (
//     e.code === 2
// )))



    const TOKEN = process.env.REACT_APP_TOKEN
const [dataCity,setDataCity] = useState([])
const [cityValue,setCityValue] = useState('')
const [insee,setInsee] = useState('')


  const selectCity = (e:any,insee:string) => {
      e.preventDefault()
       setInsee(insee)
       setCityValue('')
  }

  useEffect(() => {
     apiMeteo.get(`location/cities?token=${TOKEN}&search=${cityValue}`)
     .then((res:any) => setDataCity(res.data.cities))
  },[cityValue,TOKEN])

    return(
     <div>
         <SearchBar dataCity={dataCity} cityValue={cityValue} setCityValue={setCityValue} selectCity={selectCity}/>
         <Weather insee={insee}/>
     </div>

    )
}

export default Home