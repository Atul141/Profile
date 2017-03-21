import React, { Component } from 'react';
import './App.css';
import Option from "./Option.js";
import Content from "./Content.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-page">
            <Option />
            <Content/>
        </div>
      </div>
    );
  }
}

export default App;
