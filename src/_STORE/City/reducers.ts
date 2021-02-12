import { ICity } from './types'
import { SELECT_CITY } from './constants'
import { SelectCity } from './actions'

const city: ICity = {
    city_name: '',
    country_name: '',
    lat: 0,
    long: 0
}

export const cityReducer = (state = city, action: SelectCity): ICity => {
    switch (action.type) {
        case SELECT_CITY:
            return state = action.city
        default: return state
    }
}
