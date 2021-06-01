import React from 'react';

import {NavLink} from 'react-router-dom';

const Menu=()=>{

    return(
        <React.Fragment>
            <div className="menu-wrapper">
                
                <div className='menu-items'>
                    <ol>
                        <li><NavLink className="inactive_class" activeClassName="active_class" to="/" color='black'>Home</NavLink></li>
                        <li><NavLink className="inactive_class" activeClassName="active_class" to="/Resume">Résumé</NavLink></li>
                        <li><NavLink className="inactive_class" activeClassName="active_class" to="/About">About</NavLink></li>
                        <li><NavLink className="inactive_class" activeClassName="active_class" to="/Contact">Contact</NavLink></li>
                    </ol>
                </div>
            </div>

        </React.Fragment>

    );

};

export default Menu;