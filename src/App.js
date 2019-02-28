import React, { Component } from 'react';
import Header from './components/Header';
import Weather from './components/Weather';
import Footer from './components/Footer';

const API_KEY = "8497e5d0fa116038a80a64f010f6c215";

class App extends Component {

    constructor(props)
    {
        super(props);
        this.state = {

        };

        this.updateSearchCityWeather = this.updateSearchCityWeather.bind(this);
        this.detailView =  this.detailView.bind(this);
        this.initDB();

        localForage.iterate((value, key, iterationNumber) => {
            let currentCities = lodash.cloneDeep(this.state.savedCities);
            currentCities.push(value);
            this.setState({savedCities: currentCities});
        }); 
    }

    initDB()
    {
        localForage.config({
            driver: localForage.INDEXEDDB,
            name: ' weatherForageApp',
            version: 1.0,
            storeNAme : 'dataStorage',
            description : 'some description' 
        });

        console.log("Database init complete");
    }

    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => 
    {
        e.preventDefault();

        const city = e.target.elements.city.value;

        const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        
        const response = await API_CALL.json();

        if(city)
        {
            this.setState(
            {
                temperature: response.main.temp,
                city: response.name,
                country: response.sys.country,
                humidity: response.main.humidity,
                description: response.weather[0].description,
                error: ""
            });
        } else {
            this.setState(
            {
                error: "Enter city name!"
            })
        }  
    }

    render() {

        // let viewOutput = this.state.detailViewActive ?
        // () : ();

        return (
            <div>
                <Header loadWeather={this.getWeather} />
                <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error} 
                />
                <Footer /> 
            </div>
        );
    }
}

export default App;