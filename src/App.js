import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Test from "./components/Test"
import BaseItems from "./BaseItems"
import FullItems from "./FullItems"
import Champions from "./Champions"
import Base from "./components/Base"

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      baseitems:BaseItems,
      fullitems:FullItems,
      champions:Champions,
      userInventory:[]
    }
    this.onBaseItemClick = this.onBaseItemClick.bind(this)
    this.onSetBaseClick = this.onSetBaseClick.bind(this)
  }
  onBaseItemClick=e=>{
  let id = e.target.id
   
    
    this.setState(previousState => ({
      userInventory: [...previousState.userInventory, id]
  }));    
    

    
  }
  onSetBaseClick=()=>{
    let userFulls =[]
   const userInventory = this.state.userInventory;
   userInventory.sort()
   userInventory.forEach(combineSameItems)
  //  userInventory.forEach(combineOtherItems)
  
   function combineSameItems(item){
     userFulls.push(item+item)
   }

   for(var i =0; i<userInventory;i++){
     console.log(i)
   }

  //  function combineOtherItems(item){
  //    let index = userInventory.indexOf(item)
  //    let nextIndex = index + 1
  //    let nextItem = userInventory[nextIndex]
     
  //      userFulls.push(item + nextItem);
  //      //would like to add a pop here to get rid of the last array element
  //      //but it ain't working right at the moment
     
  //  }
   
   const newSet = new Set(userFulls)
   const userFullItems = [...newSet]
   console.log(userFullItems)
  }
  render(){
  return (
    <div className="App">
    <Base
    baseitems={this.state.baseitems}
    fullitems={this.state.fullitems}
    champions={this.state.champions}
    onBaseItemClick={this.onBaseItemClick}
    onSetBaseClick={this.onSetBaseClick}
    />
    </div>
  );
  }
}

export default App;

 {/* <Test
    baseitems={this.state.baseitems}
    fullitems={this.state.fullitems}
    champions={this.state.champions}
    /> */}
