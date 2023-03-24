import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS_Files/font.css'

const MobileStyles = {
    parent: {
        position: 'relative',
        top: '175px',
        
    },
    image1: {
        width: '200px',
        position: 'absolute',
        top: '0px',
        left: '30px',
        
        
    },
    image2: {
        width:'200px',
        position: 'relative',
        top: '20px',
        left: '70px',
    },
    mobilehearts: {
        position:'absolute',
        top:'565px'
    }

}


var overlapImagesList =[];

class MobileOverlappingImages extends React.Component{
    importAll(r) {
        return r.keys().map(r);
    };
    componentWillMount() {
        overlapImagesList = this.importAll(require.context('../SMBP Test/Overlaying Images', false, /\.(png|jpe?g|svg)$/));
    }
    render(){
        return (
            <>
    
            <div className="parent" style={MobileStyles.parent}>
                <h2 className='MobileQuote1'>"I capture <br></br> fleeting moments, <br></br>so they last<br></br> a lifetime"</h2>
                <img className="image1" src={overlapImagesList[0]} style={MobileStyles.image1} alt="bottomimg1" />
                <img className="image2" src={overlapImagesList[1]} style={MobileStyles.image2} alt="topimg1" />
                <div className='MobileLocationContainer'>
                    <h2 className='MobileLocationTitle'>Colorado Photographer</h2>
                </div>
                <div>
                    <p className='MobileLocationText'>Though I wasn't born in Colorado, I consider Colorado my home. Throughout the several years of photographing in this beautiful state, I have found some truly magical spots that I'm excited to take you to!</p>
                </div>
                <div className='mobilehearts' style={MobileStyles.mobilehearts}>
                    <p> &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp;</p>
                </div>
                <Link to="/about" className='MobileAboutButtonContainer'>
                    <button className='MobileAboutButton'>LEARN MORE</button>
                </Link>
                
            </div>
            
            </>
        )
    }
}

export default MobileOverlappingImages;