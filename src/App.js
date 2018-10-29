import React, { Component } from 'react';
import Routes from './Routes'
import Navbar from './components/common/navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    );
  }
}

export default App;
