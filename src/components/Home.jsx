import CarouselDisplay from "./CarouselDisplay";
import { useMediaQuery } from "react-responsive";
import OverlappingImages from './OverlayingImages';
import TabletOverlappingImages from './TabletOverlayingImages';
import MobileOverlappingImages from "./MobileOverlayingImages";
import Location from "./Location";
import Featured from "./Featured";
import Testimonials from "./Testimonials";
import InstaDisplay from "./InstaDisplay";
import '../CSS_Files/stickylogo.css';

export default function Home () {
    
    
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

        return(
            <>
                <CarouselDisplay/>
                    {isDesktop &&
                    <>
                        <div className="DesktopSticky"></div>               
                        <OverlappingImages/> 
                        <Location />
                        <Featured />
                        <Testimonials/>
                        <InstaDisplay/>            
                    </>             
                }

                {isTablet &&
                    <div className="TabletHomeContainer">
                            <div className="TabletSticky">
                                <div className='TabletGradient'>
                                    <div className="TabletLogoTextBox">
                                        <p className="TabletLogoText">Tablet Screen!</p>
                                    </div>
                                </div>
                            </div>               
                        <div>
                            <TabletOverlappingImages/> 
                        </div>
                        <div>
                            <Testimonials/>
                        </div>
                    </div>
                }

            {isMobile &&
                <>
                    <div className='MobileSticky'></div>                                 
                    <MobileOverlappingImages/>
                    <Location/>
                    <Featured/>
                    <Testimonials/>      
                </>    
            }
        </>
    )
}







    


    