//REDUX IMPORTS
import { storeConfig } from '../../../_STORE'
import { selectCity } from '../../../_STORE/City/actions'
import { currentForecast, weekForecast} from '../../../_STORE/Forecast/actions'

//INTERFACE IMPORTS
import { ICity } from '../../../_STORE/City/types'
import { IForecast } from '../../../_STORE/Forecast/types'

//MAIN
let urlCity: string = 'http://api.openweathermap.org/data/2.5/forecast?q='
let urlForecast: string = 'https://api.openweathermap.org/data/2.5/onecall?'
const apiKey: string | undefined = `${process.env.REACT_APP_API_KEY}`
//INTERFACE
interface IQueryCity{
    city: string,
    country: string
}
interface IQueryForecast{
    lat: number,
    lon: number
}

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
    const reduxCity = storeConfig.getState().city
    const reduxForecast = storeConfig.getState().forecastInfo
    const city: ICity = await fetchCity(query)
    const forecast = await fetchForecast({ lat: city.lat, lon: city.long })
    const current: IForecast = {
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
    // await reduxCity.dispatch(selectCity(city))
    const infos = {
        city: city,
        current: current
    }
    return infos
}