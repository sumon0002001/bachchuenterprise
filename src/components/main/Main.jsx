import React from 'react';
import styles from './Main.module.css';
import img1 from '../../images/food.jpg';
import img2 from '../../images/lab.jpg';
import img3 from '../../images/textile.jpg';
import img4 from '../../images/img3.jpg';
import img5 from '../../images/img4.jpg';
import img6 from '../../images/img5.jpg';
import img7 from '../../images/img6.jpg';
import { Carousel } from 'react-bootstrap';

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();



const Main = () => {

  return (
    <div className= {styles.mainBg}>
      <div class="jumbotron heading ">
          <div class="container pt-4 pb-6">
            <h3 class="title-1">"Want to buy chemicals from a reliable company??"</h3>
            <h1 class="title-main ">Bachchu Enterprise <br/> Since 2000</h1>
            <div class="event-des p-3 mt-4">
                <p class="lead ">Bachchu enterprise is a Bangladeshi chemicals trading company, 
                                 primarily committed to deliver quality chemicals products and 
                                 Convenience to its customers. We are your one stop destination 
                                 to all your chemicals needs - spreading positivity and creativity with our unique finds.
                                 We started in 2000 and it is our mission to only list the FINEST and most QUALITY products on this website.
                </p>
           </div>
            <div class="info-date mt-4 ">
              <p class="date font-weight-bold text-dark">Time: {time} </p>
              <p class="date font-weight-bold text-dark">Date: {date}</p>
                
                
            </div>
          </div>
        </div>
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

         <div class="partner container mt-4">
          <h4 class="text-center text-white py-4">Gallery</h4>
                <hr class="main-program-line" />
               


<div class="row" id="gallery" data-toggle="modal" data-target="#exampleModal">
  <div class="col-12 col-sm-6 col-lg-3">
    <img class="w-100" src={img4} alt="First slide" data-target="#carouselExample" data-slide-to="0" />
  </div>
  <div class="col-12 col-sm-6 col-lg-3 pb-3">
    <img class="w-100" src={img5} alt="First slide" data-target="#carouselExample" data-slide-to="1" />
  </div>
  <div class="col-12 col-sm-6 col-lg-3">
    <img class="w-100" src={img6} alt="First slide" data-target="#carouselExample" data-slide-to="2" />
  </div>
  <div class="col-12 col-sm-6 col-lg-3">
    <img class="w-100" src={img7} alt="First slide" data-target="#carouselExample" data-slide-to="3" />
  </div>
</div>








                
                      
                      
                 
               
                </div>

           
          
    </div>
  )
}

export default Main;