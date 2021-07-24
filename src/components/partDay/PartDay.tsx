import React from 'react'
import './partDay.scss'

const PartDay = (props:any) => {


    const {setPeriod,period} = props


    const handlePartDay = (e:any,day:number) => {
           e.preventDefault()
           setPeriod(day)
    }

    console.log(props);
    return (
        <div className='partDay'>
            <ul>
                <li className={period === 1 ? 'liIsSelect':''} onClick={(e:any) => handlePartDay(e,1)}>Matin</li>
                <li className={period === 2 ? 'liIsSelect':''} onClick={(e:any) => handlePartDay(e,2)}>Après-midi</li>
                <li className={period === 3? 'liIsSelect':''} onClick={(e:any) => handlePartDay(e,3)}>Soir</li>
            </ul>
        </div>

    )
}

export default PartDay