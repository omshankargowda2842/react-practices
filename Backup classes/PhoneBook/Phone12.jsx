import React,{useState,useEffect} from 'react'
 
const Phone12 = () => {
    let[ phone,setPhone]=useState({
                   firstname:"",
                   lastname:"",
                   phonenumber:""
 })
let changehandler=(event)=>{
setPhone({...phone,[event.target.name]:event.target.value})
}
let submithandler=(event)=>{
event.preventDefault()
console.log(phone);
}
  return (
    <div>
        <pre>{JSON.stringify(phone)}</pre>
        <center>
            <form onSubmit={submithandler}>
            <h2>  PHONE BOOK</h2>
            <input type="text"  name="firstname" onChange={changehandler} placeholder="Enter First Name"/><br />< br/>
            <input  type="text"  name="lastname" onChange={changehandler} placeholder="Enter Last Name"/><br /><br/>
            <input type="number"  name="phonenumber" onChange={changehandler}  placeholder="Enter Phone Number"/><br /><br />
            <button type='submit'>  Add to Contacts</button>
            </form>

           <div className="container mt-5">
               <div className="row">
                   <div className="col-md-12">
                   <table className='table table-hover'>
               <thead>
               <tr>
                    <th> First Name</th>
                    <th> Last Name</th>
                    <th> Phone Number</th>
                </tr>
               </thead>
               
                   <tbody>
                       {setPhone.map((a)=>{
                         return <tr>
                          <td>{a.firstname}</td>
                      </tr>
                       })
                      }
                   </tbody>
               
            </table>
                   </div>
               </div>
               </div>

        </center>
      
    </div>
  )
}

export default Phone12
