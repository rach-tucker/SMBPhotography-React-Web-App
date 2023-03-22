import React from 'react';
import { useMediaQuery } from "react-responsive";
import '../CSS_Files/testimonials.css';


export default function Testimonials(){

    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 767 });
    

    return (
    <>
        {isDesktop &&
            <div className='DesktopImagesParent'>
                <h2 className='DesktopPraiseText'>The Highest of Praise</h2>
                <p className='testtext'>
                    <img className='DesktopTestImage' src="https://img1.wsimg.com/isteam/ip/2f283cab-20fc-41c1-973d-6e6946741b77/IMG_9369.jpg/:/rs=w:1300,h:800" alt="Snow"/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, at cumque? Ipsum odit ipsa consectetur harum, qui quia repellendus officia et minima quasi eveniet recusandae expedita, quis ducimus optio aut.
                </p>
                <p className='testtext'>
                    <img className='DesktopTestImage' src="https://img1.wsimg.com/isteam/ip/2f283cab-20fc-41c1-973d-6e6946741b77/IMG_7000.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800" alt="Snow"/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, at cumque? Ipsum odit ipsa consectetur harum, qui quia repellendus officia et minima quasi eveniet recusandae expedita, quis ducimus optio aut.
                </p>
                <p className='testtext'>
                    <img className='DesktopTestImage' src="https://img1.wsimg.com/isteam/ip/2f283cab-20fc-41c1-973d-6e6946741b77/IMG_4381.jpg/:/rs=w:1300,h:800" alt="Snow"/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, at cumque? Ipsum odit ipsa consectetur harum, qui quia repellendus officia et minima quasi eveniet recusandae expedita, quis ducimus optio aut.
                </p>

            </div>
        }
        {isTablet &&
            <div className='imagesParent'>
                <p>
                    <img className='image' src="https://img1.wsimg.com/isteam/ip/2f283cab-20fc-41c1-973d-6e6946741b77/IMG_9369.jpg/:/rs=w:1300,h:800" alt="Snow"/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, at cumque? Ipsum odit ipsa consectetur harum, qui quia repellendus officia et minima quasi eveniet recusandae expedita, quis ducimus optio aut.
                </p>
                <p>
                    <img className='image' src="https://img1.wsimg.com/isteam/ip/2f283cab-20fc-41c1-973d-6e6946741b77/IMG_7000.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800" alt="Snow"/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, at cumque? Ipsum odit ipsa consectetur harum, qui quia repellendus officia et minima quasi eveniet recusandae expedita, quis ducimus optio aut.
                </p>
                <p>
                    <img className='image' src="https://img1.wsimg.com/isteam/ip/2f283cab-20fc-41c1-973d-6e6946741b77/IMG_4381.jpg/:/rs=w:1300,h:800" alt="Snow"/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, at cumque? Ipsum odit ipsa consectetur harum, qui quia repellendus officia et minima quasi eveniet recusandae expedita, quis ducimus optio aut.
                </p>

            </div>
        }
        {isMobile &&
        
            <div className='MobileImagesParent'>
                <h2 className='MobilePraiseText'>The Highest of Praise</h2>
                <p className='MobileTestText'><span>
                    <img className='MobileTestImage' src="https://img1.wsimg.com/isteam/ip/2f283cab-20fc-41c1-973d-6e6946741b77/IMG_9369.jpg/:/rs=w:1300,h:800" alt="Snow"/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, at cumque? Ipsum odit ipsa consectetur harum, qui quia repellendus officia et minima quasi eveniet recusandae expedita, quis ducimus optio aut.
                </span></p>
                <p className='MobileTestText'>
                    <img className='MobileTestImage' src="https://img1.wsimg.com/isteam/ip/2f283cab-20fc-41c1-973d-6e6946741b77/IMG_7000.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1300,h:800" alt="Snow"/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, at cumque? Ipsum odit ipsa consectetur harum, qui quia repellendus officia et minima quasi eveniet recusandae expedita, quis ducimus optio aut.
                </p>
                <p className='MobileTestText'>
                    <img className='MobileTestImage' src="https://img1.wsimg.com/isteam/ip/2f283cab-20fc-41c1-973d-6e6946741b77/IMG_4381.jpg/:/rs=w:1300,h:800" alt="Snow"/>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, at cumque? Ipsum odit ipsa consectetur harum, qui quia repellendus officia et minima quasi eveniet recusandae expedita, quis ducimus optio aut.
                </p>

            </div>
        }
    </>
    ) 
}
   
