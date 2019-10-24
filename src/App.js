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
      userInventory:[], 
      userFullItems:[],
      userChampions:[]
    
    }
    
    this.onBaseItemClick = this.onBaseItemClick.bind(this)
    this.onSetBaseClick = this.onSetBaseClick.bind(this)
    this.onClear = this.onClear.bind(this)
    
  }
  onBaseItemClick=e=>{
  let id = e.target.id
   
    
    this.setState(previousState => ({
      userInventory: [...previousState.userInventory, id]
  }));    

  
    

    
  }



  onSetBaseClick=()=>{
    

    this.setState({userFullItems:[]})
    this.setState({userChampions:[]})
    
    let userFulls =[]
    const userInventory = this.state.userInventory;
    const fullitems = this.state.fullitems
    const champions = this.state.champions
    
    
    
    userInventory.sort()
    console.log(userInventory);
    //add base items together
    for (var i=0; i < (userInventory.length-1); i++) {
      for (var j=(i+1); j < userInventory.length; j++) {
        userFulls.push(userInventory[i]+userInventory[j]);
      }
    }
    

  //returning base items together for user full items
   const newSet = new Set(userFulls)
   const userFullItems = [...newSet]
   console.log(userFullItems)
    //filtering to full items to be with the user full items
   const fullItemFilter =userFullItems.map(item=>
    fullitems.filter(result=>result.id===item)
    )
    const fullItemFlat = fullItemFilter.flat(Infinity)
   this.setState({userFullItems:fullItemFlat})

   //get champions
const recommendedChamps = []

// reset champ counts to 0
for (let i=0; i<champions.length; i++) {
  champions[i].count = 0;
}

for (let i=0; i<userFullItems.length; i++) {
    recommendedChamps.push(champions.filter(champ => {
      
        if(champ.items.indexOf(userFullItems[i]) > -1){
           champ.count ++;
            return true
          
          
        }
        })
    )
}

console.log(recommendedChamps);

const recommendedChampsFlat = recommendedChamps.flat(Infinity)
console.log(recommendedChampsFlat)

// const kitty = recommendedChampsFlat.sort(function(a, b) {
//   var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//   var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// });
// console.log(kitty)
recommendedChampsFlat.sort(function(a,b){
 return b.count-a.count
})


const recommendedChampsSet = new Set(recommendedChampsFlat)
const recommendedChampsList = [...recommendedChampsSet]


console.log(recommendedChampsList)
this.setState({userChampions:recommendedChampsList})

// const champUnCount = this.state.champUnCount
// this.setState({champions:champUnCount})



    
  }

  //
  //
  //
  //
  onClear=()=>{

   
    this.setState({userInventory:[]})
    this.setState({userFullItems:[]})
    this.setState({userChampions:[]})
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
    userFullItems={this.state.userFullItems}
    userChampions={this.state.userChampions}
    onClear={this.onClear}
    userInventory={this.state.userInventory}
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
