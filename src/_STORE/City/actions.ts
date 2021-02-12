import { ICity } from './types'
import { SELECT_CITY } from './constants'

export interface SelectCity{
    type: typeof SELECT_CITY;
    city: ICity
}

export const selectCity = (city: ICity) => ({
    type: SELECT_CITY,
    city
})