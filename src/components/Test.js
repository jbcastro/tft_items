import React from "react";


const Test =(props)=>{
   
  const baseitems = props.baseitems
  const fullitems = props.fullitems
  const champions = props.champions
  
  const baseitemslist = baseitems.map((item)=>
  <li key={item.id}><button>{item.name}</button></li>
  )
   return(
      <div>
       <ul>{baseitemslist}</ul> 


      </div> 
   )
}
export default Test