import React from 'react';
import '../CSS_Files/font.css'

const styles2 = {
    parent: {
        position: 'relative',
        top: '300px',
    },
    image1: {
        maxwidth:'50%',
        width: '500px',
        position: 'absolute',
        top: '0px',
        left: '30px',
  
        
    },
    image2: {
        maxwidth:'100%',
        width:'450px',
        position: 'relative',
        top: '75px',
        bottom:'50px',
        left: '150px',

    },
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
            <div className="parent" style={styles2.parent}>
                <h2 className='Quote1'>"I capture fleeting moments, <br></br>so they last a lifetime"</h2>
                <img className="image1" src={overlapImagesList[0]} style={styles2.image1} alt="bottomimg" />
                <img className="image2" src={overlapImagesList[1]} style={styles2.image2} alt="topimg" />
            </div>
        )
    }
}

export default OverlappingImages;
    