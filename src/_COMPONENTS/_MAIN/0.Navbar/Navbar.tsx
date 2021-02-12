import React, { useState, useEffect} from 'react'

//REDUX IMPORTS
import { useSelector, useDispatch } from 'react-redux'
import { selectCity } from '../../../_STORE/City/actions'
import { ICity } from '../../../_STORE/City/types'

//TYPES INTERFACES IMPORTS

//UTILITIES IMPORTS
import { fetchCity, fetchForecast, setRedux } from './utilities'

//STYLE
import './Navbar.scss';
import { currentForecast } from '../../../_STORE/Forecast/actions'

export default function Navbar() {

    const [filters, showFilters] = useState(false)
    const [byCity, setByCity] = useState({ city: 'Rome', country: 'IT' })
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const setCity = async (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            const result = await setRedux(byCity)
            console.log(result)
            dispatch(selectCity(result.city))
            dispatch(currentForecast(result.current))
        }
    }

    const fillInfos = (e: React.ChangeEvent<HTMLInputElement>) => {
        let currentId = e.currentTarget.id
        let newByCity = { ...byCity }
        if (currentId === 'city') {
            newByCity.city = e.currentTarget.value            
        } else {
            newByCity.country = e.currentTarget.value
        }
        setByCity(newByCity)
    }

    return (
        <nav className="weather-nav">
            <div className="logo">
                <img src="./assets/app icon.png" alt="" />
                <span>Weather App</span>
            </div>
            <div className="search-bar">
                <div className="search-inputs">
                    <i className="fas fa-search"></i>
                    <div className="byCity" style={{display: filters ? 'none' : ''}}>
                        <input type="text" id='city' placeholder='City' onChange={ fillInfos} onKeyDown={setCity}/>
                        <input type="text" id='country' placeholder='Country' onChange={fillInfos} onKeyDown={ setCity}/>
                    </div>
                    <div className="byCoord" style={{display: filters ? '' : 'none'}}>
                        <input type="text" id='lat' placeholder='Latitude'/>
                        <input type="text" id='long' placeholder='Longitude'/>
                    </div>
                </div>
                <p onClick={()=>showFilters(!filters)}>Show Filters</p>
            </div>
        </nav>
    )
}
