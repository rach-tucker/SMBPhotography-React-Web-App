import React from 'react';
import { useMediaQuery } from "react-responsive";
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../CSS_Files/contact.css'

function ContactForm () {

const isMobile = useMediaQuery({ maxWidth: 767 });

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        date: '',
        location: '',
        budget: '',
        reply_to: '',
      });
    
const onSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
        'service_6uv95ek',
        'template_9r7rcja',
        toSend,
        'cJj9NMBXEJbIQXZ52'
          )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
    };

    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <>
            {isMobile &&
            <div>
                <div>
                <h1 className='MobileContactText'>FIRST THINGS FIRST.<br></br>LET'S GET TO KNOW EACH OTHER.</h1>
                </div>
                <div className='mobilehearts'>
                    <p> &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp;</p>
                </div>
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='from_name'
                        placeholder='Your name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                    <textarea className='MobileContactMessage' 
                        name="message"
                        placeholder='Your message'
                        onChange={handleChange}
                        value={toSend.message}
                    />
                    <input
                        type='text'
                        name='date'
                        placeholder='mm/dd/yyyy'
                        value={toSend.date}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='location'
                        placeholder='Location, if you know!'
                        value={toSend.location}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='budget'
                        placeholder='Budget (if applicable.)'
                        value={toSend.budget}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        name='reply_to'
                        placeholder='Your email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                    <div className='ContactButtonContainer'>
                        <button className='ContactButton' type='submit'>SEND ME A MESSAGE</button>
                    </div>
                </form>  
            </div>
            }
        </>
    )
}

export default ContactForm;