import React, { Component } from 'react';

import './App.less';
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
