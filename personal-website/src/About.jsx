import React from 'react';
import myimg from './myimg.png'
const About=()=>{
    return(
        <React.Fragment>
            <div className="about">
                <div className="hello">
                    <h1>Hello!</h1>
                </div>
                <div className="text-info">
                    <p>I'm Parteek, a senior undergraduate at IIT Delhi, Department of Physics. I am interested in software enginnering</p>
                    <p>I am from New Delhi, India currently studying and living at IIT Delhi, New Delhi.</p>
                    <p>Without knowing it, I think I've always been a coder at heart - having the chance to learn and develop myself is what motivates me more than anything else, and I love being able to combine my creative side with my problem solving skills. I'm organised, detail-oriented, and motivated, and my background in both academic institutions and the sftware industry means that I am highly adaptable and bring a unique perspective to all of my projects.</p>
                    <img src={myimg} alt="img" align='right'/>
                </div>
            </div>
            
        </React.Fragment>

    );


}

export default About;