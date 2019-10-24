import React from "react";
import BFBF from "../img/combined/BFBF.png"
import BFCV from "../img/combined/BFCV.png"

const Base =(props)=>{
   
  const baseitems = props.baseitems
  const fullitems = props.fullitems
  const champions = props.champions
  const onBaseItemClick = props.onBaseItemClick
  const userFullItems = props.userFullItems
  const userChampions = props.userChampions
  const userInventory = props.userInventory
  
  const baseItemList = baseitems.map((item)=>
  <li key={item.id}>
      <button 
      id={item.id} 
      value={item.name}
      onClick={e => onBaseItemClick(e)}>
      {item.name}
      </button>
      </li>
      
  )
  const fullItemList = userFullItems.map(item=>
   
   <li key={item.id}>{item.name}<img src={item.id}/></li>
   
   )

   const userChampionsList = userChampions.map(item=>
      <li key={item.name}>{item.name}=>{item.count}</li>
      )
      const userInventoryList = userInventory.map(item=>
         <li key={item.index}>{item}</li>
         )
  
   return(
      <div>
       <ul>{baseItemList}</ul> 
       <ul>{userInventoryList}</ul> 
        <button onClick={props.onSetBaseClick}>click</button>
        <button onClick={props.onClear}>clear</button>
        <ul>{fullItemList}</ul>
        <ul>{userChampionsList}</ul>
        

      </div> 
   )
}
export default Base