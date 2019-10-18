import React from "react";


const Test =(props)=>{
   const champions = props.champions
   console.log(champions)
   return(
      <div>
         {champions.map(item=>{
            return console.log(item)
         })}


      </div> 
   )
}
export default Test