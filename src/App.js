import { Route, Routes } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import './CSS_Files/font.css';
import Footer from './components/Footer';


const App = () => {


    return (
        <div className="App">     
            <Navigation/>
            <Routes>
                <Route exact path='/' element={ <Home /> }/>
                <Route path='/about' element={ <About /> }/>  
                <Route path='/portfolio' element={ <Portfolio /> }/>               
                <Route path='/contact' element={ <ContactForm /> }/>  
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
