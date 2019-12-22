import React, { Component } from 'react'
import '../css/texto.css'
import fondo from '../css/backbround.jpg'



export default class  extends Component {
    render() {
        return (
            <div className= "texto mt-4">
           
                <p>¿Estas pensando en un corte de pelo?</p>
                <p className= "texto2">Nosotros tambien nos organizamos.Podes pedir tu cita online</p>
                <button type="button" class="btn btn-lg  btn-danger">Pedir Turno</button>
            </div>
        )
    }
}
