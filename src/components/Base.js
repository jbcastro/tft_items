import React from "react";


const Base =(props)=>{
   
  const baseitems = props.baseitems
  const fullitems = props.fullitems
  const champions = props.champions
  const onBaseItemClick = props.onBaseItemClick
  const userFullItems = props.userFullItems
  const userChampions = props.userChampions
  
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
   <li key={item.id}>{item.name}</li>
   )

   const userChampionsList = userChampions.map(item=>
      <li key={item.name}>{item.name}</li>
      )
  
   return(
      <div>
       <ul>{baseItemList}</ul> 
        <button onClick={props.onSetBaseClick}>click</button>
        <ul>{fullItemList}</ul>
        <ul>{userChampionsList}</ul>

      </div> 
   )
}
export default Base