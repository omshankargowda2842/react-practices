import React,{useState,useEffect} from 'react'

const Phone1 = () => {
   const[phone,setPhone]=useState({
                            name:"",
                            email:"",
                            number:""
   })
   const[store,setStore]=useState([])
   const[formerror,setFormerror]=useState({})
   let[submit,setSubmit]=useState(false)

    let updatehandler=(event)=>{
        setPhone({...phone,[event.target.name]:event.target.value})
    }
    let submithandler=(event)=>{
      event.preventDefault()
      setFormerror(validate(phone))
      setSubmit(true)
    }
    useEffect(()=>{
        if((Object.keys(formerror).length===0 )){
             const newstore=[...store,phone]
             setStore( newstore )}
             },[formerror])
    
    const validate=(val)=>{
        const err={}
        setFormerror(err)
        const OnlyStrings=/^[a-zA-z]*$/
        if(!val.name){
          err.name=' please Enter First name is required'
        }
        else if(!val.name.match(OnlyStrings)){
          err.name='Please enter only alphabets'
        }
        if(!val.email){
          err.email=' please Enter Email ID is required'
        }
        if(!val.number){
          err.number=' Please Enter Mobile Number'
        }
        else if(val.number.length>10){
          err.number='Please  enter mobile number only 10 nubers'
        }
        else if(val.number.length<10){
          err.number='Mobile Number maximum is 10 numbers only'
        }
        return err
    }
  return (
    <div className='mt-5'>
        <pre>{JSON.stringify(phone)}</pre>
      <center>
         
          <div className="container mt-5">
              <div className="row">
                  <div className="col-md-6">
                  <form onSubmit={submithandler}>
                      <div className="form-group">
                        <input type="text"  className="form-control"name='name' placeholder='Enter Name' onChange={updatehandler} />
                        <span>{formerror.name}</span>
                        </div>
                        <div className="form-group">
                        <input type="email"className="mt-3 form-control"  name='email' placeholder="Enter Email"onChange={updatehandler} />
                        <span>{formerror.email}</span>
                          </div>
                        <div className="form-group">
                        <input type="number"className="mt-3 form-control"  name='number' placeholder='Enter Number'onChange={updatehandler} />
                        <span>{formerror.number}</span>
                        </div>
                      <div>
                        <input  type="submit" className='btn btn-success mb-3' value="submit" />
                      </div>
                  </form>
                  <table className='table table-hover'>
              <thead className='bg-dark text-white'>
                  <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Number</th>
                      
                  </tr>
              </thead>
              <tbody>
                  {
                     store.map((data,index)=>{
                      ;  
                        return <tr key={index}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.number}</td>
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

export default Phone1
