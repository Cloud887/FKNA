import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state({
      thingThatWillChange: false
    });
    let arrayOfLightBulbs = ['led', 'halogen', 'incan'];

    this.handleParsingofUtilities = this.handleParsingofUtilities.bind(this);
  }

  handleParsingofUtilities(arrays) {
    let parsedUtils = arrays.map(function(ele) {
      return <section>${ele}</section>;
    });
    return parsedUtils;
  }

  render() {
    return (
      <div>
        <header />
        <h1>The LightHouse</h1>

        <div>${this.props.parsedUtils}</div>
      </div>
    );
  }
}
