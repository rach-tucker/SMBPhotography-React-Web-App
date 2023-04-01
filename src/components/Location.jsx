import React from 'react';
import { useMediaQuery } from "react-responsive";
import { Link } from 'react-router-dom';
import '../CSS_Files/location.css';


export default function Location () {

    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <>
            {isMobile &&
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
            }

            {isDesktop &&
                <div className='DesktopLocationContainer'>
                    <div className='DesktopLocationTitleContainer'>
                        <h2 className='DesktopLocationTitle'>Colorado Photographer</h2>
                    </div>
                    <div>
                        <p className='DesktopLocationText'>Not sure where to go? Don't worry! I'm excited to take you to some truly magical spots<br></br>I've discovered in the one and only, Colorado! </p>
                    </div>
                    <Link to="/about" className='DesktopAboutButtonContainer' onClick={() => window.scrollTo(0, 0)}>
                        <button className='DesktopAboutButton'>LEARN MORE</button>
                    </Link>
                </div>
            }
        </>
    )
}