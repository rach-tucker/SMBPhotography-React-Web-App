import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS_Files/location.css';


export default function Location () {
    return (
        <>
            <div className='MobileLocationContainer'>

                <div className='MobileLocationTitleContainer'>
                    <h2 className='MobileLocationTitle'>Colorado Photographer</h2>
                </div>
                <div>
                    <p className='MobileLocationText'>I'm excited to take you to some truly magical spots I've discovered in the one and only, Colorado! ♥</p>
                </div>
                <Link to="/about" className='MobileAboutButtonContainer' onClick={() => window.scrollTo(0, 0)}>
                    <button className='MobileAboutButton'>LEARN MORE</button>
                </Link>
            </div>
        </>
    )
}