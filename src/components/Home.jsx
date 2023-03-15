import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import '../CSS_Files/font.css'

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

class SplitText extends Component {
  render(){
    return(
      <span aria-label={this.props.copy} role={this.props.role}>
          {this.props.copy.split("").map(function(char, index){
            let style = {"animation-delay": (0.5 + index / 10) + "s"}
            return <span
              aria-hidden="true"
              key={index}
              style={style}>
              {char}
            </span>;
          })}
        </span>
    );
  }
}

var listOfImages =[];

class Home extends React.Component{
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
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 h-auto"
                            src={listOfImages[0]}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 h-auto"
                            src={listOfImages[1]}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 h-auto"
                            src={listOfImages[2]}
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div>
                    <Carousel.Caption className='container' style={styles.container}>
                        <h1><SplitText copy="Soul Meets Body Photography" role="heading" /></h1>
                    </Carousel.Caption>
                </div>
            </>
        )
    }
}

export default Home;
