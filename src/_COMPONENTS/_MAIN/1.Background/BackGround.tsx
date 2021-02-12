import React from 'react'

//REDUX IMPORTS
import { useSelector, useDispatch } from 'react-redux'
import { MainState } from '../../../_STORE'

//INFOS IMPORTS
import { checkStatus } from './infos'

//STYLE
import './BackGround.scss'

export default function Background() {

    const state = useSelector((state: MainState) => state)

    const status = checkStatus(state.forecastInfo.current.id)

    const style = {
        backgroundImage: `url('./assets/${status}.jpg')`
    }

    return (
        <div className="background" style={style}>
        </div>
    )
}
