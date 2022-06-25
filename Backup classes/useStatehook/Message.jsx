import React, {useState} from 'react'
let Message=()=>{
   
       let [msg,setmsg]= useState("hello")
     let gmhandler=()=>{
      
          setmsg(  "hello gm")}
    let gnhandler=()=>{
      setmsg("hello,gn")
    }       
       
         
return( <>
<h1> Use State Hook</h1>
<pre> Wish={msg}</pre>
<input type="button" value=" GM" onClick={gmhandler} />
<input type="button" value=" GN" onClick={gnhandler} />
</>

)
     }

 export default Message