import React,{useState,useEffect} from 'react'

const Phone123 = () => {

    
    let[ phone,setPhone]=useState({
        first:"",
        email:"",
        number:""

    })
    let updatehandler=(event)=>{
        setPhone({...phone,[event.target.name ]:event.target.value})
        
        
    }
     let submithandler=(event)=>{
          event.preventDefault()
          console.log(phone)
    }
    let[store,setStore]=useState([])
    let[formerrors,setFormerrors]=useState({})
    let[submit,setSubmit]=useState(false)
  return (
    <div className="mt-5">
        <pre>{JSON.stringify(phone)}</pre>
        <center> <form  onSubmit={submithandler}>
            <input type="text" name="first"  placeholder=' Enter first name' onChange={updatehandler} /><br/><br/>
            <input type="text" name="last"  placeholder='Enter email ' onChange={updatehandler} /><br/><br/>
            <input type="number" name="number"  placeholder="Enter phone number" onChange={updatehandler}/><br/> <br/>
            <button>Add to contact</button>
            </form>
            <table  className='table table-hover container mt-5'>
                <thead className='bg-dark text-white'>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Phone number</th>
                        <th className=' bg-white'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        store.map((event,index)=>{
                            return<tr key={index}>
                                <td>{event.first}</td>
                                <td>{event.last}</td>
                                <td>{event}</td>
                                <td></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </center>
    
    </div>
  )
}

export default Phone123














































 