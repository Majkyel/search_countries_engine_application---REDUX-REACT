import React from 'react';
import {Link} from 'react-router';
import CountryFlag from './flag.component.js';


const CounterFlagList = (props) => (
    <div className='countries-List'>
        {props.countries.map(country => {
            return (
                <div className='single-country' key={country.id}>
                    <Link className='logo' to={'countries/country/' + country.id}>
                        <CountryFlag country={country}/>
                    </Link>
                    <button onClick={props.deleteCountry.bind(null, country.id)}>Delete</button>
                </div>
            )
        })}
    </div>
);

export default CounterFlagList;
