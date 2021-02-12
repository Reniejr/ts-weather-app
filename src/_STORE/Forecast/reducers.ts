import { IForecast, IForecastApp } from './types'
import { CURRENT_FORECAST, WEEK_FORECAST } from './constants'
import { ForecastApp } from './actions'

let forecast: Array<IForecast> = []
const forecastInfo: IForecastApp = {
    current: {
        id: 0,
        main: '',
        description: '',
        icon: '',
        temp: 0,
        humidity: 0,
        wind_speed: 0,
        clouds: 0,
        rain: 0,
        snow: 0
    },
    forecast: forecast
}

export const forecastReducer = (state = forecastInfo, action: ForecastApp): IForecastApp => {
    switch (action.type) {
        case CURRENT_FORECAST:
            return { ...state, current: action.forecast }
        case WEEK_FORECAST:
            return { ...state, forecast: action.weekForecast }
        default: return state
    }
}