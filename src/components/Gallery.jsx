// src/component/Gallery.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import '../CSS_Files/carousel.css';
import '../CSS_Files/font.css';
import SplitText from "./WelcomeMessage";

class Carousel2 extends React.Component {
    render() {
        return (
            <div className="CarouselContainer">
                <div>
                    <h1><SplitText copy="Oh, hello there" role="heading" /></h1>
                </div>
                <Carousel className="Carousel" autoPlay interval="5000" transitionTime="3000" infiniteLoop>
                    <div>
                        <img src="https://images.unsplash.com/photo-1656268164012-119304af0c69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" alt="" />
                        
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1655745653127-4d6837baf958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                        
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1516527653392-602455dd9cf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80" alt="" />
                        
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1655365225165-8d727fe3a091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=80" alt="" />
                    
                    </div>
                </Carousel>
            </div>
        )
    };
}
export default Carousel2;