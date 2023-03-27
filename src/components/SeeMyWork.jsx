import React from 'react';
import '../CSS_Files/seemywork.css';
import { Link } from 'react-router-dom';


export default function SeeMyWork () {
    return (
        <>
            <div className='SeeMyWorkContainer'>
                <div className='MobileStickyContainer'>
                <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>
                    <button className='MobileGalleryButton'>VIEW MY PORTFOLIO</button>
                </Link>
                </div>
                <div className="bg-image img1"></div>
                <div className="bg-image img2"></div>
                <div className="bg-image img3"></div>
                <div className="bg-image img4"></div>
                <div className="bg-image img5"></div>
                <div className="bg-image img6"></div>      
            </div>
        </>
    )
}