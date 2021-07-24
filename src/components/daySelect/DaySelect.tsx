import React from 'react'
import './daySelect.scss'

const DaySelect = (props:any) => {

    const {dataWeather,selectDay,dateDay} = props



const convertDayWeek = ((day:number)=> {
 let dayMonth = ""
 switch(day){
     case(0):
     dayMonth = 'Dimanche'
     break;
     case(1):
     dayMonth = 'Lundi'
     break;
     case(2):
     dayMonth = 'Mardi'
     break;
     case(3):
     dayMonth = 'Mercredi'
     break;
     case(4):
     dayMonth = 'Jeudi'
     break;
     case(5):
     dayMonth = 'Vendredi'
     break;
     case(6):
     dayMonth = 'Samedi'
     break;

 }
 return dayMonth

})

const date = ((date:string) => {

  const date1  = new Date(`${date}`)
  const dayWeek =  convertDayWeek(date1.getDay())
  const dayMonth = date1.getDate()
  const dateResult = `${dayWeek} ${dayMonth}`
   return dateResult
})




    return (
        <ul className='daySelect'>
           {dataWeather.length !== 0 ? dataWeather.forecast.map((data:any,index:number) =>   
                <li className={dateDay === data.day ? 'dayIsSelect':''} key={index} onClick={(e:any) => selectDay(e,data.day)}> 
                   {date(data.datetime)} 
                   <span className='divisionDay'></span>
                </li>
            ):null}
        </ul>

    )
}

export default DaySelect