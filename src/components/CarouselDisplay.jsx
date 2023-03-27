import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import '../CSS_Files/carousel.css';
import '../CSS_Files/font.css';
import SplitText from "./WelcomeMessage";

var listOfImages =[];

class CarouselDisplay extends React.Component {
    importAll(r) {
        return r.keys().map(r);
    };
    componentWillMount() {
        listOfImages = this.importAll(require.context('../SMBP Test', false, /\.(png|jpe?g|svg)$/));
    }
    render() {
        return (
            <div className="CarouselContainer">
                <div>
                    <h1><SplitText copy="Oh, hello there!" role="heading" /></h1>
                </div>
                <Carousel className="Carousel" autoPlay interval="3000" transitionTime="2000" infiniteLoop>
                    <div>
                    <img src={listOfImages[0]} className="d-block w-100" alt="..."/>
                        
                    </div>
                    <div>
                    <img src={listOfImages[1]} className="d-block w-100" alt="..."/>
                        
                    </div>
                    <div>
                    <img src={listOfImages[2]} className="d-block w-100" alt="..."/>
                        
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1655365225165-8d727fe3a091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=80" alt="" />
                    
                    </div>
                </Carousel>
            </div>
        )
    };
}
export default CarouselDisplay;