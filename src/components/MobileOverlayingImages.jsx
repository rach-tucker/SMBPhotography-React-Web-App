import React from 'react';
import '../CSS_Files/font.css'

const MobileStyles = {
    parent: {
        position: 'relative',
        top: '135px',
    },
    image1: {
        width: '175px',
        position: 'absolute',
        top: '0px',
        left: '30px',
        
        
    },
    image2: {
        width:'157px',
        position: 'relative',
        top: '25px',
        left: '90px',
    },
    hearts: {
        position:'absolute',
        top:'230px'
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
                <div className='hearts' style={MobileStyles.hearts}>
                    <p> &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp;</p>
                </div>
                
            </div>
            
            </>
        )
    }
}

export default MobileOverlappingImages;