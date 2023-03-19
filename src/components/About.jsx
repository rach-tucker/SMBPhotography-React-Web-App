import '../CSS_Files/body.css';
import { useMediaQuery } from 'react-responsive';

const About = () => {

    const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
    })

    return (
        <div>
            {isDesktopOrLaptop &&
                <>
                    <p>You are a desktop or laptop</p>
                    <h5>The One Behind The Camera</h5>
                </>
             }
        </div>
    )
}

export default About;