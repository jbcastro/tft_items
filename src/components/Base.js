import React from "react";


const Base =(props)=>{
   
  const baseitems = props.baseitems
  const fullitems = props.fullitems
  const champions = props.champions
  const onBaseItemClick = props.onBaseItemClick
  
  const baseitemslist = baseitems.map((item)=>
  <li key={item.id}>
      <button 
      id={item.id} 
      value={item.name}
      onClick={e => onBaseItemClick(e)}>
      {item.name}
      </button>
      </li>
  )
   return(
      <div>
       <ul>{baseitemslist}</ul> 
        <button onClick={props.onSetBaseClick}>click</button>

      </div> 
   )
}
export default Base