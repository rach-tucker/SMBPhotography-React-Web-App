import { Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/ContactForm';
import './CSS_Files/font.css';


const App = () => {


    return (
        <div className="App">     
            <Navigation/>
            <Routes>
                <Route exact path='/' element={ <Home /> }/>
                <Route path='/about' element={ <About /> }/>  
                <Route path='/gallery' element={ <Gallery /> }/>               
                <Route path='/contact' element={ <ContactForm /> }/>  
            </Routes>
        </div>
    );
}

export default App;
