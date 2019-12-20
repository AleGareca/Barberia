import React, { Component } from 'react'
import  "../css/carrucel.css"
import Imagen1 from '../Imagen1.jpg'
import Imagen2 from '../imagen2.jpg'
import Imagen3 from '../imagen3.jpg'



export default class Carrucel extends Component {
    render() {
        return (
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner carrucel ">
    <div class="carousel-item active">
      <img src={Imagen1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/originals/73/61/1c/73611ccad62013c1c339fb200c4a2222.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="http://www.fm105.com.mx/wp-content/uploads/2018/12/ttt.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
        )
    }
}
