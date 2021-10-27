import React, { Component } from 'react';
import { InfoAlert } from './Alert';

class CitySearch extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      query: '',
      suggestions: [],
      showSuggestions: undefined,
      infoText: ''
    }
  }
  
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1; //this finds all the letters in a location (every letter the user types is counted)
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText: 'We can not find the city you are looking for. Please try another city'
      });
    } else {
      return this.setState({
        query: value,
        infoText: "",
        
        suggestions,
        showSuggestions: false,
      });  
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false
    });
    this.props.updateEvents(suggestion);
  };

  render() {

    return (
     <>
      <InfoAlert className="infoAlert" text={this.state.infoText} />
      <div className="CitySearch">
        <input
        type="text"
        placeholder="Find Events in your City"
        className="city"
        value={this.state.query}
        onChange={(event) => this.handleInputChanged(event)}
        onFocus={() => { this.setState({ showSuggestions: true }) }}
        />
        <ul className="suggestions" style={this.state.showSuggestions ? {} : { display: 'none' } }>
          {this.state.suggestions.map((suggestion) => (
          <li 
            key={suggestion}
            onClick={() => this.handleItemClicked(suggestion)}
            >{suggestion}</li>
            ))}
          <li key="all" onClick={() => this.handleItemClicked('all')}>
            <b>See all cities</b>
          </li>
        </ul>
      </div>
     </> 
    );
  }
}

export default CitySearch;