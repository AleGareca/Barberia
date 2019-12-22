import React, { Component } from 'react'
import instagram from '../imagenes/instagram.svg'
import facebook from '../imagenes/facebook.svg'

export default class NavBar extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-dark bg-dark ml-auto fixed-top" >
                
                <a class="navbar-brand">
                    <img src='https://image.flaticon.com/icons/png/512/1995/1995573.png' 
                    width="30" height="30" alt=""/>Barberia
                </a>
                    
                 <div className="ml-auto">
                    <img  src= {instagram} width="30" height="30"/>
                    <img  src= {facebook} width="30" height="30"/>
                </div>
        
            
          </nav>
          </div>
                )
    }
}
