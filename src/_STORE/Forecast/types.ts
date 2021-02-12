export interface IForecast {
    id: number,
    main: string,
    description: string,
    icon: string,
    temp?: number,
    min_temp?: number,
    max_temp?: number    
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