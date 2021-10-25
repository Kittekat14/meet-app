import React, { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.backgroundColor = null;
    this.fontSize = null;
    this.fontWeight = null;
    this.maxWidth = null;
    this.margin = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.backgroundColor,
      fontSize: this.fontSize,
      fontWeight: this.fontWeight,
      maxWidth: this.maxWidth,
      margin: this.margin,
    };
  }

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}



export class InfoAlert extends Alert {
  constructor(props) {
      super(props);
    this.color = 'blue';
    this.backgroundColor = '#cdcdcd';
    this.fontSize = '18px';
    this.fontWeight = '500';
    this.maxWidth = '600px';
    this.margin = '0 auto';

  }
}

export class ErrorAlert extends Alert {
  constructor(props) {
      super(props);
    this.color = 'red';
    this.backgroundColor = '#fff';
    this.fontSize = '16px';
    this.fontWeight = '700';
    this.margin = "0 auto";
  }
}