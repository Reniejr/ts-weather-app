export interface IForecast {
    main: string,
    description: string,
    icon: string,
    temp: number,
    humidity: number,
    wind_speed: number,
    clouds?: number,
    rain?: number,
    snow?: number
}

export interface IForecastApp {
    current: IForecast,
    forecast: IForecast[]
}