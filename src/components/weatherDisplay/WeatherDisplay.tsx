import React, {useEffect, useState} from 'react'
import './weatherDisplay.scss'
import {codeTemps} from '../codeTemps/CodeTemps'
import apiMeteo from '../conf/apiMeteo'

interface Weather {
    city:{
    city:string,
    cp:number,
    image:string,
    weather:string,
    temperature:number,
}}

const WeatherDisplay = (props:any) => {

    const {insee,dateDay,period} = props
    const TOKEN = process.env.REACT_APP_TOKEN
    const [cityWeather,setCityWeather] = useState<Weather["city"]>({
        city:'',
        cp:0,
        image:'',
        weather:'',
        temperature:0
      })


      const filterCodeWeather = (imageOrWeather:string,codeWeather:number) => {
       const code = codeTemps.filter((e:any) => e.code === codeWeather)
      return imageOrWeather === "image" ? code[0].image : code[0].temps
    }


      const choiceImageandWeather = (imageOrWeather:string,codeWeather:number) => {
         
        
        if(codeWeather=== 0){
           return imageOrWeather === 'image'? filterCodeWeather('image',0) : filterCodeWeather('code',0);
        }
        else if(codeWeather === 1){
           return imageOrWeather === 'image'? filterCodeWeather('image',1) : filterCodeWeather('code',1);
        }
        else if(codeWeather === 2){
           return imageOrWeather === 'image'? filterCodeWeather('image',2) : filterCodeWeather('code',2);
        }
        else if(codeWeather >=3 && codeWeather <=7){
           return imageOrWeather === 'image'? filterCodeWeather('image',3) : filterCodeWeather('code',3);
          }
          else if((codeWeather >=10 && codeWeather <= 16)||(codeWeather >=210 && codeWeather <= 212)){
           return imageOrWeather === 'image'? filterCodeWeather('image',4) : filterCodeWeather('code',4);
          }
          else if((codeWeather >=20 && codeWeather <= 22)||(codeWeather >=220 && codeWeather <= 222)){
           return imageOrWeather === 'image'? filterCodeWeather('image',5) : filterCodeWeather('code',5);
         }
         else if((codeWeather >=30 && codeWeather <= 32)||(codeWeather >=70 && codeWeather <= 78)||(codeWeather >=230 && codeWeather <= 235)){
           return imageOrWeather === 'image'? filterCodeWeather('image',6) : filterCodeWeather('code',6);
         }
         else if(codeWeather >=40 && codeWeather <= 48){
           return imageOrWeather === 'image'? filterCodeWeather('image',7) : filterCodeWeather('code',7);
         }
         else if(codeWeather >=60 && codeWeather <= 68){
           return imageOrWeather === 'image'? filterCodeWeather('image',8) : filterCodeWeather('code',8);
         }
         else if(codeWeather >=100 && codeWeather <= 142){
           return imageOrWeather === 'image'? filterCodeWeather('image',9) : filterCodeWeather('code',9);
         }   
      }

    useEffect(() => {
        apiMeteo.get(`forecast/daily/${dateDay}/period/${period}?token=${TOKEN}&insee=${insee}`)
        .then( (res:any) =>{
            setCityWeather({
                city:res.data.city.name,
                cp:res.data.city.cp,
                image:`${choiceImageandWeather('image',res.data.forecast.weather)}`,
                temperature:res.data.forecast.temp2m,
                weather:`${choiceImageandWeather('code',res.data.forecast.weather)}`
                }) } )
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[TOKEN, dateDay, insee, period])
 
    // console.log(dateDay)
    // console.log(props);

    
    return (
        <div className='wheatherDisplay'>
            <div>
                <img src={cityWeather.image} alt="d" width="100" height="100" />
           </div>
            <div>
                 <div><p className='city'>{cityWeather.city}</p></div>
                 <div className='tempWeathercontainer'>
                     <p className='temperature'>{cityWeather.temperature} °C</p>
                     <p className='weather1'>{cityWeather.weather}</p>
                 </div>
          </div>
        </div>

    )
}

export default WeatherDisplay