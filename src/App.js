import React from 'react';
import { useEffect,useState } from 'react';
const App=()=>{
  const[number,setnumber]=useState( )
  const[search,setsearch]=useState(0)
  console.log(number)
 useEffect(()=>{
      if(search>0 &&search!=NaN){
       setTimeout(() => {
         setsearch(search-1)
       }, 1000);
      }
      if(search<0&&search==NaN){
       setTimeout(() => {
         setsearch(0)
       }, 1000);
      }
    },[search])
  return(
    <div>
    <div><h1>current Time</h1></div>
    <div id="current-time">{search} seconds left</div>
   <div><input type="number" onChange={(e)=>{setnumber(e.target.value)}}/></div>
   <div><button onClick={()=>{setsearch(Math.floor(number))}} >enter</button></div>
   </div>
  )
}



export default App;

      

     