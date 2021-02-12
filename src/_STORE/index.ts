import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { cityReducer } from './City/reducers'
import { SelectCity } from './City/actions'
import { forecastReducer } from './Forecast/reducers'
import { ForecastApp } from './Forecast/actions'

declare global{
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    city: cityReducer,
    forecastInfo: forecastReducer
})

type AllActions = SelectCity | ForecastApp

export type MainState = ReturnType<typeof rootReducer>

export const storeConfig = createStore(rootReducer, composedEnhancer(applyMiddleware(thunk as ThunkMiddleware<MainState, AllActions>)))