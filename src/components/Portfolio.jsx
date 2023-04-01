import { useMediaQuery } from "react-responsive";
import '../CSS_Files/portfolio.css'


export default function Portfolio () {

    const isDesktop = useMediaQuery({ minWidth: 992 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    const isMobile = useMediaQuery({ maxWidth: 767 });


    return (
        <>
           
        <div class="container">
        <h1 className="PortfolioTitle">Soul Meets Body Photography</h1>
        <h2 className="PortfolioWord">PORTFOLIO</h2>
        <div class="image-gallery">
          <div class="column">
            <div class="image-item">
              <img src="https://source.unsplash.com/VWcPlbHglYc" alt="" />
              <div class="overlay"><span>Image title</span></div>
            </div>
            <div class="image-item">
              <img src="https://source.unsplash.com/e6FMMambeO4" alt="" />
              <div class="overlay"><span>Image title</span></div>
            </div>
            <div class="image-item">
              <img src="https://source.unsplash.com/klCiPmzUw0Y" alt="" />
              <div class="overlay"><span>Image title</span></div>
            </div>
          </div>
          <div class="column">
            <div class="image-item">
              <img src="https://source.unsplash.com/O0N9MF--hK4" alt="" />
              <div class="overlay"><span>Image title</span></div>
            </div>
            <div class="image-item">
              <img src="https://source.unsplash.com/FV3GConVSss" alt="" />
              <div class="overlay"><span>Image title</span></div>
            </div>
            <div class="image-item">
              <img src="https://source.unsplash.com/0ESjL-Nw22Y" alt="" />
              <div class="overlay"><span>Image title</span></div>
            </div>
            <div class="image-item">
              <img src="https://source.unsplash.com/KTVn62x6fFw" alt="" />
              <div class="overlay"><span>Image title</span></div>
            </div>
          </div>
          <div class="column">
            <div class="image-item">
              <img src="https://source.unsplash.com/VSeVhmW4_JQ" alt="" />
              <div class="overlay"><span>Image title</span></div>
            </div>
            <div class="image-item">
              <img src="https://source.unsplash.com/07aFaTf24Kg" alt="" />
              <div class="overlay"><span>Image title</span></div>
            </div>
            <div class="image-item">
              <img src="https://source.unsplash.com/DqyYTM7pR2o" alt="" />
              <div class="overlay"><span>Image title</span></div>
            </div>
            <div class="image-item">
              <img src="https://source.unsplash.com/IdNOTjPeHrE" alt="" />
              <div class="overlay"><span>Image title</span></div>
            </div>
          </div>
        </div>
      </div>  
            
            
        </>
    )
}