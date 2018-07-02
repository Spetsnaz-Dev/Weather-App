import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Weather from './components/Weather';
import Titles from './components/Titles';
import Form from './components/Form';

const API_KEY = '97ceed7a2a54de751df50d6eca8ac436';
let celsius;
class App extends Component {
//initial state
    state = {
        temperature : undefined,
        city : undefined,
        country : undefined,
        humidity : undefined,
        descriptiion  : undefined,
        error : undefined
    };
//fetch data from API
    getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const url = "http://api.openweathermap.org/data/2.5/weather?q=" +city+ "," +country+ "&appid="+API_KEY;
      const api_call = await fetch(url);
      const data = await api_call.json();
//if user filled the form elements
      if(city && country) {
          celsius = Math.round(0.55*(data.main.temp -32));
          this.setState({
              temperatureF: data.main.temp,
              temperatureC: celsius,
              city : data.name,
              country : data.sys.country,
              humidity : data.main.humidity,
              description : data.weather[0].description,
              error : ''
          })
      }
      else {
          this.setState({
              temperatureF : undefined,
              city : undefined,
              country : undefined,
              humidity : undefined,
              description  : undefined,
              error : "Please ENTER THE VALUES"
          })
      }
    };
    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container-fluid text-center">
                            <div className="row">
                                <div className="col-xs-6 title-container">
                                    <Titles />
                                </div>
                                <div className="col-xs-6 form-container">
                                    <Form getWeather={this.getWeather} />
                                    <Weather
                                        temperatureC={this.state.temperatureC}
                                        temperatureF={this.state.temperatureF}
                                        city={this.state.city}
                                        country={this.state.country}
                                        humidity={this.state.humidity}
                                        description={this.state.description}
                                        error={this.state.error}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;

ReactDOM.render( <App />, document.getElementById('root'));