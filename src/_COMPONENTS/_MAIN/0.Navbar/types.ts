export interface IQueryCity{
    city: string,
    country: string
}
export interface IQueryForecast{
    lat: number,
    lon: number
}

export interface IByCity{
    city: string,
    country: string
}

export interface IDaily{
    dt: number,
  sunrise: number,
  sunset: number,
  temp: IDailyTemp,
  feels_like: IDailyFeels,
  pressure: number,
  humidity: number,
  dew_point: number,
  wind_speed: number,
  wind_deg: number,
  weather: IDailyWeather[],
  clouds: number,
  pop: number,
    rain?: number,
    snow?: number,
  uvi: number
}

interface IDailyTemp{
    day: number,
    min: number,
    max: number,
    night: number,
    eve: number,
    morn: number,
}

interface IDailyFeels{
    day: number,
    night: number,
    eve: number,
    morn: number
}

interface IDailyWeather{
    id: number,
    main: string,
    description: string,
    icon: string
}