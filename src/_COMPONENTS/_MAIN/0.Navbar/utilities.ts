//REDUX IMPORTS
import { storeConfig } from '../../../_STORE'
import { SELECT_CITY } from '../../../_STORE/City/constants'
import { CURRENT_FORECAST, WEEK_FORECAST } from '../../../_STORE/Forecast/constants'

//INTERFACE IMPORTS
import { ICity } from '../../../_STORE/City/types'
import { IForecast } from '../../../_STORE/Forecast/types'
import { IDaily, IQueryCity, IQueryForecast } from './types'
import { selectCity } from '../../../_STORE/City/actions'

//MAIN
let urlCity: string = 'http://api.openweathermap.org/data/2.5/forecast?q='
let urlForecast: string = 'https://api.openweathermap.org/data/2.5/onecall?'
const apiKey: string | undefined = `${process.env.REACT_APP_API_KEY}`

//FETCH FORECAST
export const fetchCity = async (query: IQueryCity): Promise<ICity> => {
    const response = await fetch(`${urlCity}${query.city},${query.country}&appid=${apiKey}`)
    const result = await response.json()
    const city: ICity = {
        city_name: result.city.name,
        country_name: result.city.country,
        lat: result.city.coord.lat,
        long: result.city.coord.lon
    }
    return city
}

//FETCH FORECAST
export const fetchForecast = async (query: IQueryForecast) => {
    const response = await fetch(`${urlForecast}lat=${query.lat}&lon=${query.lon}&exclude=hourly,minutely,alerts&units=metric&appid=${apiKey}`)
    const result = await response.json()
    console.log(result)
    return result
}

//SET REDUX
export const setRedux = async (query: IQueryCity) => {
    //CITY
    const city: ICity = await fetchCity(query)
    const forecast = await fetchForecast({ lat: city.lat, lon: city.long })

    let week:IForecast[] = []

    //CURRENT
    const current: IForecast = {
        id: forecast.current.weather[0].id,
        main: forecast.current.weather[0].main,
        description: forecast.current.weather[0].description,
        icon: forecast.current.weather[0].icon,
        temp: forecast.current.temp,
        humidity: forecast.current.humidity,
        wind_speed: forecast.current.wind_speed,
        clouds: forecast.current.clouds,
        rain: forecast.current.rain ? forecast.current.rain : 0,
        snow: forecast.current.snow ? forecast.current.snow : 0
    }

    //WEEK
    forecast.daily.slice(0,6).map((day:IDaily) => {
        let dayWeather: IForecast = {
            id: day.weather[0].id,
            main: day.weather[0].main,
            description: day.weather[0].description,
            icon: day.weather[0].icon,
            min_temp: day.temp.min,
            max_temp: day.temp.max,
            humidity: day.humidity,
            wind_speed: day.wind_speed,
            clouds: day.clouds,
            rain: day.rain ? day.rain : 0,
            snow: day.snow ? day.snow : 0
        }
        week=week.concat(dayWeather)
    })
     
    //REDUX INFOS
    const infos = {
        city: city,
        current: current,
        week: week
    }

    return infos
}