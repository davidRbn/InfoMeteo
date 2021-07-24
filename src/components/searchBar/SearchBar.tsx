import React from 'react'
import './searchBar.scss'


const SearchBar = (props:any) => {

const {dataCity,cityValue,setCityValue,selectCity} = props


    return (
        <div className='searchBar'>
            <form className='form' >
                <div className='input-result'>
                <input 
                    type='search'
                    placeholder='Ville'
                    value={cityValue}
                onChange={e => setCityValue(e.target.value)}
                />

                {dataCity.length === 0 ? null : 
                    <div className='resultCity'>
                
               { dataCity.map((city:any,index:number) => (

                    <div className='sectionResult' key={index} onClick={e => selectCity(e,city.insee)}>
                        <p>{city.name}</p>
                    </div>
                ))}
                </div>
                }
                    </div>

            <div>
            <input type='submit' value='Rechercher' className='buttonSearch'/>
            </div>
            </form>
    

        </div>

    )
}

export default SearchBar
