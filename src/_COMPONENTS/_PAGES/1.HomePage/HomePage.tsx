import React, { useState, useEffect} from 'react'
import { RouteComponentProps } from 'react-router-dom'

//REDUX IMPORTS
import { useSelector, useDispatch } from 'react-redux'
//TYPES IMPORTS
import { MainState } from '../../../_STORE/'

//UTILITIES IMPORTS

//BOOTSTRAP IMPORTS
import { Container } from 'react-bootstrap'

//STYLE
import './HomePage.scss';

//PROPS


export default function HomePage(props: RouteComponentProps) {

    const state = useSelector(state => state)

    console.log(state)
    
    return (
        <div id="home-page">
                <Container>
                    <h1></h1>
                </Container>
            </div>
    )
}
