import React from 'react';
import {Github, Instagram,Facebook, Linkedin, Envelope} from 'react-bootstrap-icons';

const Contact=()=>{
    return(
        <React.Fragment>
            <div className="contact-text">
                <h1>Get in touch</h1>
                <h2>I am currently looking for Opportunities to work as a Software Developer Intern</h2>
            </div>
            <div className='contact-bar'>
                <ul>
                    <li><a href="mailto:prateekyadav2020@gmail.com" target="_blank"><Envelope className='mail-icon' color='#000'/></a></li>
                    <li><a href="https://github.com/patrik20-i" target="_blank"><Github color='#000'/></a></li>
                    <li><a href="https://www.linkedin.com/in/parteek-kumar-a96932174/" target="_blank"><Linkedin color='#000'/></a></li>
                    <li><a href="https://www.instagram.com/_22_prateek/" target="_blank"><Instagram color='#000'/></a></li>
                    
                </ul>
            </div>
            
        </React.Fragment>

    );


}

export default Contact;