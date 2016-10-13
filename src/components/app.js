import React, { Component } from 'react';
import SearchBar from './searchbar';
import axios from 'axios';

const API_KEY = '3e37a8d02f7a9d89bdf045c664fd5cdc';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//prevent user from adding number or invalid string values
//add a loader for when fetching data
//get the city you type in through google map api (read into it) and print the weather

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  changeValueFunction(name) {
    this.setState({ value: name });
  }

  fetchCityData() {
    const URL = `${ROOT_URL}&q=${this.state.value}`;
    const request = axios.get(URL);

    request.then((result) => {
      console.log(result.data.list[1].main.temp);
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <SearchBar
          placeholder={'Enter City'}
          clearInput={() => this.fetchCityData()}
          changeValueFunction={(e) => this.changeValueFunction(e)}
          value={this.state.value}
        />
      </div>
    );
  }
}
