import React from 'react';

const Weather = props => (
    <div className="weather-info">
        {
            props.city && props.country && <p className="key"> Location :
                <span className="value"> {props.city} , {props.country} </span>
                </p>
        }
        {
            props.temperatureF && <p className="key"> Temperature :
               <span className="value"> {props.temperatureC} C / {props.temperatureF} F </span>
            </p>
        }
        {
            props.humidity && <p className="key"> Humidity :
                <span className="value"> {props.humidity} % </span>
                </p>
        }
        {
            props.description && <p className="key"> Conditions :
                <span className="value"> {props.description} </span>
                </p>
        }
        {
            props.error && <p className="error-message">{props.error}</p>
        }
    </div>
);

export default Weather;