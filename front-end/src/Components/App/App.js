import React, { Component } from 'react';
import { Lines } from 'react-preloaders';
import Routes from '../../Routes';

class App extends Component {
  render() {
    document.body.style.backgroundColor = "#52a7ce";
    return (
      <React.Fragment>
        <Lines
          color={'#f7f7f7'} 
          bgColor={'#222'} 
          time={2000} 
        />                
        <Routes/>
      </React.Fragment>
    );
  }
}

export default App;
