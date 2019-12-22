import React, { Component } from 'react'
import NavBar from './NavBar';
import Carrucel from './Carrucel';
import Body from './Body';

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Carrucel/>
                <Body/>
            </div>
        )
    }
}
