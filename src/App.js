import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Test from "./components/Test"
import BaseItems from "./BaseItems"
import FullItems from "./FullItems"
import Champions from "./Champions"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      // baseitems:BaseItems,
      // fullitems:FullItems,
      champions:Champions
    }
  }
  render(){
  return (
    <div className="App">
    <Test
    // baseitems={this.state.baseitems}
    // fullitems={this.state.fullitems}
    champions={this.state.champions}
    />
    </div>
  );
  }
}

export default App;
