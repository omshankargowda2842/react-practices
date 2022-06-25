import React, { useState } from 'react'
import Data from '../Axios/Contact.json'

const Filterfun = () => {
    let[search,setSearch]=useState("")
  return (
    <div>
<pre>{JSON.stringify(Data)}</pre>
<center>
       <h2> Enter City Name</h2>
       <input type="text" value={search} onChange={(e)=>{
           setSearch(e.target.value)
       }}/>
       {
         Data.filter((a)=>a.name.toLowerCase().startsWith(search.toLowerCase())).map((a ,index)=>{
         return <div key={index} style={{"border":"1px solid black","padding":"10px", "margin":"10px"}}>
             {a.name}
         </div>
         })  
       }
</center>
      
    </div>
  )
}

export default Filterfun
