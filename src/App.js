import React, { Component } from 'react';

import './App.css';
import Headline from './components/headline';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      
      <Headline title='Where to start'>
            Edit <code>src/App.js</code> and save to reload.
      </Headline>
      </div>
    );
  }
}

export default App;
