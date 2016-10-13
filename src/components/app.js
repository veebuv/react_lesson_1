import React, { Component } from 'react';
import SearchBar from './searchbar';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  changeValueFunction(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <SearchBar
          placeholder={'Enter City'}
          clearInput={() => this.setState({ value: '' })}
          changeValueFunction={(e) => this.changeValueFunction(e)}
          value={this.state.value}
        />
      </div>
    );
  }
}
