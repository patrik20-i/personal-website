import React from 'react';
import {Github, Instagram,Facebook, Linkedin, Envelope} from 'react-bootstrap-icons';

const Leftnavbar=()=>{

    return(
        <React.Fragment>
            <div className='leftbar'>
                <ul>
                    <li><a href="mailto:prateekyadav2020@gmail.com" target="_blank"><Envelope className='mail-icon' color='#000'/></a></li>
                    <li><a href="https://github.com/patrik20-i" target="_blank"><Github color='#000'/></a></li>
                    <li><a href="https://www.linkedin.com/in/parteek-kumar-a96932174/" target="_blank"><Linkedin color='#000'/></a></li>
                    <li><a href="https://www.instagram.com/_22_prateek/" target="_blank"><Instagram color='#000'/></a></li>
                    
                </ul>
            </div>
            

        </React.Fragment>
    )

};

export default Leftnavbar;