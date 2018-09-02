import React from 'react';
import '../country.css';


const CountryDetails = (props) => (
    <div className='country-wrapper'>
        <div>
            <header>
                <img className='country-photo' src={props.country.imageUrl} alt='Country flag'/>
            </header>
            <div className='country-info'>
                <h1>{props.country.name}</h1>
                <h2>Continent: {props.country.continent}</h2>
            </div>
            <div className='info'>
                <div>
                    <span>Capital: </span>
                    <span>{props.country.capital}</span>
                </div>
                <div>
                    <span>Populace[mln]: </span>
                    <span>{props.country.populace}</span>   
                </div>
                <div>
                    <span>Currency: </span>
                    <span>{props.country.currency}</span>
                </div>
            </div>
        </div>
    </div>   
)

export default CountryDetails;