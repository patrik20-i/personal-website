import React from 'react';
import Menu from './Menu';
import Leftnavbar from './Leftnavbar';
import { Route,Switch } from 'react-router-dom';
import Bio from './Bio';
import Resume from './Resume';
import About from './About';
import Contact from './Contact';

const App=()=>{
    return (
        <React.Fragment>
            <Menu />
            <Leftnavbar />
            <Switch>
                <Route exact path="/" component={Bio} />
                <Route exact path="/Home" component={Bio} />
                
                <Route exact path="/Resume" component={Resume} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Contact" component={Contact} />
                <Route component={Error} />
            </Switch>
        </React.Fragment>

    );

};

export default App;