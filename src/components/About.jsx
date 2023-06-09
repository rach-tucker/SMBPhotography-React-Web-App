import React from 'react';
import { useMediaQuery } from 'react-responsive';
import '../CSS_Files/about.css';
import Tanya from '../Images/Tanya-1.jpg';
import SeeMyWork from './SeeMyWork';

const About = () => {

    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <> 
            {isDesktop &&
                <div className='DesktopAboutContainer'>
                    <div className='DesktopAboutTitle'>
                        <h2>The One Behind The Camera</h2>
                    </div>
                    <div className='DesktopAboutImageContainer'>
                        <img className='DesktopTanyaAboutImg' src={Tanya} alt='Tanya'/>
                    <p className='DesktopAboutText'>Hi, I'm Tanya! <br></br><br></br>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit tempore ipsam laborum ipsum placeat animi officiis laudantium, maxime nulla nobis ullam dolorum culpa, necessitatibus fugiat sunt illo. Nemo, inventore fugiat. Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br>
                    </br><br></br>Five Things You Should Know About Me!<br></br><br></br>
                        1. I'm a baking enthusiast<br></br>
                        2. I have a "small" plant obsession<br></br>
                        3. My interior style is Modern Farmhouse<br></br>
                        4. On my free time I explore the great outdoors of Colorado<br></br>
                        5. I own a small business in Colorado Springs called Findings</p>
                    </div>
                    <p className='desktophearts'> &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp;</p>
                    <SeeMyWork />

                </div>
            }

            {isMobile &&   
                <div className="MobileAboutContainer">
                    <div className='MobileAboutTitle'>
                        <h2>The One Behind The Camera</h2>
                    </div>
                    <div className='MobileAboutImageContainer'>
                        <img className='MobileTanyaAboutImg' src={Tanya} alt='Tanya'/>
                    <p className='MobileAboutTextLarge'>Hi, I'm Tanya!</p>
                    <p className='MobileAboutTextSmall'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit tempore ipsam laborum ipsum placeat animi officiis laudantium, maxime nulla nobis ullam dolorum culpa, necessitatibus fugiat sunt illo. Nemo, inventore fugiat. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                 
                        <p className='AboutMobileHearts'> &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp;</p>
                   
                    <div>
                        <p className='MobileAboutTextLarge'>Five Things About Me! Because, why not?</p>
                        <p className='MobileFiveThingsText'> 1. I'm a baking enthusiast<br></br>
                        <br></br>2. I have a "small" plant obsession<br></br>
                        <br></br>3. My interior style is Modern &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Farmhouse<br></br>
                        <br></br>4. On my free time I explore the great &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;outdoors of Colorado<br></br>
                        <br></br>5. I own a small business in Colorado &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Springs called Findings
                       </p>
                    </div>
                    
                        
                    </div>
   
                        <SeeMyWork/>

                </div>
            }
        </>
    )
}

export default About;


