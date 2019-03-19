import React, { Component } from 'react';

import './App.css';
import Headline from './components/headline';
import Navigation from './components/navigation/navigation';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
