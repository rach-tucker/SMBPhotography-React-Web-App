import React from 'react';
import { useMediaQuery } from "react-responsive";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import '../CSS_Files/contact.css'


export default function ContactForm () {

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
            <div className='ContactPage'>
                <div>
                    <h1 className='MobileContactText'>FIRST THINGS FIRST.<br></br>LET'S GET TO KNOW EACH OTHER.</h1>
                </div>
                <div className='MobileContactTextSmall'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni mollitia aliquam nisi odit sint. Laboriosam voluptas eveniet illo deleniti sunt molestias, quam expedita ea tempore vel exercitationem est quis et?</p>
                </div>         
                <div>
                <div className='mobilehearts'>
                    <p> &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp; ♥ &nbsp;&nbsp;</p>
                </div>
                    <h1 className='MobileContactText'>GET IN TOUCH WITH</h1>
                    <h1 className='MobileCompanyText'>Soul Meets Body Photography</h1>
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
                        <button type="submit" className='ContactButton' data-bs-toggle="modal" data-bs-target="#exampleModal">
                        SEND ME A MESSAGE
                        </button>
                    </div>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Thank you!</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                Your message has been sent. Please allow up to 36 hours for a response!
                            </div>
                            <div className="modal-footer">
                            <Link to='/home'>
                                <button type="button" className="btn btn-secondary">Okay</button>                    
                            </Link>
                            </div>
                            </div>
                        </div>
                        </div>
                </form>  
            </div>
            }
        </>
    )
}
