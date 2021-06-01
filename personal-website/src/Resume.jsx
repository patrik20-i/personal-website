import React from 'react';
import {Dot, AwardFill,PlusCircleDotted} from 'react-bootstrap-icons';

const Resume=()=>{
    return(
        <React.Fragment>
            <div className="resume-text">
                <h1>Résumé</h1>
                <a href="https://drive.google.com/file/d/1gx8F5xTy7haHe_STvnH3ElG26BRZ3psW/view?usp=sharing" target="_blank">Download PDF Version</a>
            </div>

            <div className="resume-items">
                <ul>
                    <li>
                        <div>
                            <h1><AwardFill/>Education</h1>
                            <br/>
                            <h2 ><PlusCircleDotted/> Bachelor of Technology - IIT Delhi</h2>
                            <h3><Dot/>  Engineering Physics</h3>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h1><AwardFill/>Experience</h1>
                            <br/>
                            <h2><PlusCircleDotted/> Research Intern</h2>
                            <h3><Dot/>  Nanyang Technological University, Singapore</h3>
                            <br/>
                            <h2><PlusCircleDotted/> Summer Intern</h2>
                            <h3><Dot/>  BloodConnect</h3>
                            <br/>
                            <h2><PlusCircleDotted/> Volunteer</h2>
                            <h3><Dot/>  National Service Scheme(NSS)</h3>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h1><AwardFill/>Programming And techinacal skills</h1>
                            <br/>
                            <h2><PlusCircleDotted/> Languages</h2>
                            <h3><Dot/>  C++, JAVA, Javascript, Python, HTML, Css</h3>
                            <h2><PlusCircleDotted/> Software and Libraries</h2>
                            <h3><Dot/>  MATLAB, Numpy, Pandas, Reactjs, AutoDesk</h3>
                        </div>
                    </li>
                </ul>

            </div>
            
        </React.Fragment>

    );


}

export default Resume;