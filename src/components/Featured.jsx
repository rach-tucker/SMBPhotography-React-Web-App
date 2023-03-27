import React from 'react';
import { useMediaQuery } from "react-responsive";
import { Link } from 'react-router-dom';
import '../CSS_Files/featured.css';
import Portrait1 from '../Images/portrait1.jpg';
import Portrait2 from '../Images/Portrait2.jpg';
import Portrait3 from '../Images/portrait3.jpg';


const Featured = () => {

const isMobile = useMediaQuery({ maxWidth: 767 });

    return(
        <>
            {isMobile &&
            <div>
                 <div className='mobilehearts'>
                    <p> &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp;</p>
                </div>
                <h2 className='MobileFeaturedTitle'>Work With Me</h2>
                <p className='MobileFeaturedText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempora aut voluptatem repellat soluta molestias recusandae, dolorum vero. Ipsum doloremque fuga iure, aliquid atque fugiat. Deleniti tenetur molestiae soluta culpa!</p>
                <div className='MobileFeaturedContainer'>
                    <div className='MobileImgContainer'>
                        <img className='MobileFeatImg' src={Portrait1} alt="portrait"/>
                    </div>
                    <div className='MobileImgContainer'>
                        <img className='MobileFeatImg' src={Portrait2} alt="Forest"/>
                    </div>
                    <div className='MobileImgContainer'>
                        <img className='MobileFeatImg' src={Portrait3}alt="Mountains"/>
                    </div>
                </div>
                <Link to="/contact" className='MobileButtonContainer' onClick={() => window.scrollTo(0, 0)}>
                    <button className='MobileContactButton'>SEND ME A MESSAGE</button>
                </Link>
            </div>
            }
        </>
    )
}

export default Featured;