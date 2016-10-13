import React, { Component, PropTypes } from 'react';

export default class SearchBar extends Component {

  static propTypes = {
    placeholder: PropTypes.string,
    clearInput: PropTypes.func,
    changeValueFunction: PropTypes.func,
    value: PropTypes.string,
  }

  render() {
    const { placeholder } = this.props;

    return (
      <div>
        <input
          value={this.props.value}
          onChange={(e) => this.props.changeValueFunction(e)}
          placeholder={placeholder}
        />
        <button onClick={() => this.props.clearInput()}>Search</button>
      </div>
    );
  }
}
