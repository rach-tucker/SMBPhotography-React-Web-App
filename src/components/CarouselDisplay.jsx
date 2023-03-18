import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../CSS_Files/font.css'
import SplitText from './WelcomeMessage';


const styles = {
    container: {
        position: 'absolute',
        top: '40%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
  
    },

    CaptionStyle: {
        fontfamily:'Sacramento, serif'


    }
}

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
                <Carousel>
                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100 h-auto"
                            src={listOfImages[0]}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100 h-auto"
                            src={listOfImages[1]}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={4000}>
                        <img
                            className="d-block w-100 h-auto"
                            src={listOfImages[2]}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div>
                    <Carousel.Caption className='container' style={styles.container}>
                        <h1><SplitText copy="Oh, Hello there <3" role="heading" /></h1>
                    </Carousel.Caption>
                </div>
            </>
        )
    }
}

export default CarouselDisplay;