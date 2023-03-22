import React from 'react';
//import { Carousel } from 'react-bootstrap';
import '../CSS_Files/font.css'
import SplitText from './WelcomeMessage';


var listOfImages =[];

class CarouselDisplay extends React.Component{
    importAll(r) {
        return r.keys().map(r);
    };
    componentWillMount() {
        listOfImages = this.importAll(require.context('../SMBP Test', false, /\.(png|jpe?g|svg)$/));
    }
    
    render(){
        return( 
            <>
               <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <div class="carousel-caption">
                            <h2>THIS IS</h2>
                            <h1><SplitText copy="Soul Meets Body Photography" role="heading" /></h1>
                        </div>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="5000">
                            <img src={listOfImages[0]} class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src={listOfImages[1]} class="d-block w-100" alt="..."/>

                        </div>
                        <div class="carousel-item" data-bs-interval="5000">
                            <img src={listOfImages[2]} class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                
            </>
        )
    }
}

export default CarouselDisplay;

