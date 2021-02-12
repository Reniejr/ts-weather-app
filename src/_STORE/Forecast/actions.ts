import { IForecast } from './types'
import { CURRENT_FORECAST, WEEK_FORECAST } from './constants'

interface ICurrentForecast{
    type: typeof CURRENT_FORECAST,
    forecast: IForecast
}

interface IWeeKForecast{
    type: typeof WEEK_FORECAST,
    weekForecast: IForecast[]
}

const currentForecast = (forecast: IForecast) => ({
    type: CURRENT_FORECAST,
    forecast       
})

const weekForecast = (weekForecast: Array<IForecast>) => ({
    type: WEEK_FORECAST,
    weekForecast
})

export type ForecastApp = ICurrentForecast | IWeeKForecast

export { currentForecast, weekForecast }