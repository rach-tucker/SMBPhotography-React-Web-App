//import styles from './CarouselDisplay';
//import styles2 from './OverlayingImages';
import CarouselDisplay from "./CarouselDisplay";
import { useMediaQuery } from "react-responsive";
import '../CSS_Files/logogradient.css';
import { AnimatedGradient } from "./AnimatedGradient";
import OverlappingImages from './OverlayingImages';
import TabletOverlappingImages from './TabletOverlayingImages';
import MobileOverlappingImages from "./MobileOverlayingImages";
import Testimonials from "./Testimonials";
import InstaDisplay from "./InstaDisplay";

export default function Home () {


    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

        return(
            <> 
                <div>
                    <CarouselDisplay/>
                </div>
                {isDesktop &&
                    <div className="DesktopHomeContainer">
                            <div className="DesktopSticky">
                                <div className='DesktopGradient'>
                                    <div>
                                        {AnimatedGradient}
                                    </div>
                                    <div className="DesktopLogoTextBox">
                                        <p className="DesktopLogoText">~ Soul Meets Body Photography ~</p>
                                    </div>
                                </div>
                            </div>               
                        <div>
                            <OverlappingImages/> 
                        </div>
                        <div>
                            <Testimonials/>
                        </div>
                        <div>
                            <InstaDisplay/>
                        </div>
                    </div>
                }

                {isTablet &&
                    <div className="TabletHomeContainer">
                            <div className="TabletSticky">
                                <div className='TabletGradient'>
                                    <div>
                                        {AnimatedGradient}
                                    </div>
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
                <div className="MobileHomeContainer">
                        <div className="MobileSticky">
                            <div className='MobileGradient'>
                                <div>
                                    {AnimatedGradient}
                                </div>
                                <div className="MobileLogoTextBox">
                                    <p className="MobileLogoText">Soul Meets Body Photography</p>
                                </div>
                            </div>
                        </div>               
                    <div>
                        <MobileOverlappingImages/> 
                    </div>
                    <div>
                        <Testimonials/>
                    </div>
                </div>
            }
        </>
    )
}







    


    