//MAIN
import React, { PureComponent } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

//PERSONAL COMPONENTS IMPORTS
import HomePage from '../../_PAGES/1.HomePage/HomePage'
import Navbar from '../0.Navbar/Navbar'
import DetailPage from '../../_PAGES/2.DetailPage/DetailPage'

//STYLE
import './RouterWeb.scss';

export default class RouterWeb extends PureComponent {
    render() {
        return (
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/" exact render={(props) => <HomePage {...props} />} />
                    <Route path='/:city' render={ (props) => <DetailPage {...props}/>}/>
                </Switch>
            </Router>
        )
    }
}
