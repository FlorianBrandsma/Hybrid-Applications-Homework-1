import React, { Component } from 'react';

class Weather extends Component 
{
    render()
    {
        return (
            <div className="middle">
                <div className="weather-data">
                    {
                        this.props.temperature &&
                            <h1><i className="fas fa-cloud"></i> {this.props.temperature} °C</h1>
                    }
                    {
                        this.props.country && this.props.city &&
                        <p><h4>Location:</h4>
                            <span>  {this.props.city}, {this.props.country}</span>
                        </p>
                    }
                    {
                        this.props.humidity &&
                        <p><h4>Humidity:</h4>
                            <span>  {this.props.humidity} % <i className="fas fa-tint"></i></span>
                        </p>
                    }
                    {
                        this.props.description &&
                        <p><h4>Conditions:</h4>
                            <span>  {this.props.description}</span>
                        </p>
                    }
                    </div>
                    {
                        this.props.error &&
                        <p className="alert alert-danger" role="alert">
                            {this.props.error}
                        </p>
                    }
            </div>
        );
    }
}

export default Weather;