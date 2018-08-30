import React from 'react';
import {Link} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

const Navigation = props => (
    <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <div className=''>
                    <Link className='navbar-brand' to='/'>Państwa.js</Link>
                </div>
                <div className='nav navbar-collapse'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'><Link className='nav-link' to='/countries'>Countries</Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/continents'>Continents</Link></li>
                        <li className='nav-item'><Link className='nav-link' to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className='container-fluid'>
            {props.children}
        </div>
    </div>
);

export default Navigation;
