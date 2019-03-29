import React, { Component } from 'react';
import { Lines } from 'react-preloaders';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Lines
          color={'#f7f7f7'} 
          bgColor={'#222'} 
          time={2000} 
        /> 
      </React.Fragment>
    );
  }
}

export default App;
