import React, { Component } from 'react';
import './App.css';
import Option from "./Option.js";
import Content from "./Content.js";

class App extends Component {

  state={
    currentContent:''
  }

  __changeCurrentContent(selectedContent){
    this.setState({currentContent:selectedContent});
      console.log(this.state.currentContent);

  }
  render() {

    return (
      <div className="App">
        <div className="main-page">
            <Option changeCurrentContent={this.__changeCurrentContent.bind(this)} />
            <Content currentContent={this.state.currentContent}/>
        </div>
      </div>
    );
  }
}

export default App;
