import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS_Files/font.css';

const DesktopStyles = {
    parent: {
        position: 'relative',
        top: '300px', 
    },
    image1: {
        maxwidth:'50%',
        width: '500px',
        position: 'absolute',
        top: '0px',
        left: '200px',
        
        
    },
    image2: {
        maxwidth:'100%',
        width:'450px',
        position: 'relative',
        top: '75px',
        bottom:'50px',
        left: '350px',
        
    },
    desktophearts: {
        position:'absolute',
        top:'1300px'
    }
} 


var overlapImagesList =[];

class OverlappingImages extends React.Component{
    importAll(r) {
        return r.keys().map(r);
    };
    componentWillMount() {
        overlapImagesList = this.importAll(require.context('../SMBP Test/Overlaying Images', false, /\.(png|jpe?g|svg)$/));
    }
    render(){
        return (
            <>
    
            <div className="parent" style={DesktopStyles.parent}>
                <h2 className='DesktopQuote1'>"I capture fleeting moments, <br></br>so they last a lifetime"</h2>
                <img className="image1" src={overlapImagesList[0]} style={DesktopStyles.image1} alt="bottomimg" />
                <img className="image2" src={overlapImagesList[1]} style={DesktopStyles.image2} alt="topimg" />
               
                <div className='DesktopLocationContainer'>
                    <h2 className='DesktopLocationTitle'>Colorado Photographer</h2>
                </div>
                <div>
                    <p className='DesktopLocationText'>Though I wasn't born in Colorado, I consider Colorado my home. Throughout the several years of photographing in this beautiful state, I have found some truly magical spots that I'm excited to take you to!</p>
                </div>
                <div className='desktophearts' style={DesktopStyles.desktophearts}>
                    <p> &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp;</p>
                </div>
                <Link to="/about" className='DesktopAboutButtonContainer'>
                    <button className='DesktopAboutButton'>LEARN MORE</button>
                </Link>
            </div>
            
            </>
        )
    }
}

export default OverlappingImages;
    