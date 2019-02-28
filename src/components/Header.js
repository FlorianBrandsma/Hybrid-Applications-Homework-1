import React, { Component } from 'react';

//const cities = require('../city.list.json');
//console.log(cities.findIndex(x => x.name == "Elburg"));

class Header extends Component {
    render() {
        return (
            <div div className="middle">
            Weather
                <form autocomplete="off" onSubmit={this.props.loadWeather}>
                    <div class="autocomplete">
                        <input id="myInput" type="text" name="city" placeholder="Enter city name..." />
                        <p />            
                    </div>
                    <button>Get Weather</button>
                </form>
            </div>
        );
    }
}

export default Header; 