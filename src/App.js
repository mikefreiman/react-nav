import React, { Component } from 'react';
import ToggleNav from './components/Nav';
import Section from './components/Section';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ToggleNav/>
        <Section/>
      </div>
    );
  }
}


export default App;
