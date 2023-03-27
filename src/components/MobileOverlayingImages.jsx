import React from 'react';
import '../CSS_Files/font.css'

const MobileStyles = {
    parent: {
        position: 'relative',
        top: '40px',
        display: 'inline-block'
        
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
                <h2 className='MobileQuote1'>"I capture <br></br> fleeting moments, <br></br>so they last a lifetime"</h2>
                <img className="image1" src={overlapImagesList[0]} style={MobileStyles.image1} alt="bottomimg1" />
                <img className="image2" src={overlapImagesList[1]} style={MobileStyles.image2} alt="topimg1" />
            </div>
            
            </>
        )
    }
}

export default MobileOverlappingImages;