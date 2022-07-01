import React, { useEffect, useState } from 'react'

const Form = () => {
    const[ form,setForm]=useState({
                   name:"",
                   email:"",
                   number:""
    })
    const[store,setStore] = useState([])
    const[formerror,setFormerror] = useState({})
    const[submit,setSubmit]=useState(false)
    
    let updatehandler=(event)=>{
         setForm({...form,[event.target.name]:event.target.value})
     }
     let submithandler=(event)=>{
         event.preventDefault()
         console.log(form)
         setFormerror(validate(form))
         setSubmit(true)
     }

     useEffect(()=>{
         if((Object.keys(formerror).length===0 && submit)){
             const newStore = [...store,form]
             setStore(newStore)
         }
     },[formerror])
     const validate = (values)=>{
         const errors={}
         setFormerror(errors)
         const OnlyStrings=/^[a-zA-z]*$/
         if(!values.name){
             errors.name="please enter name"
         }
         else if(!values.name.match(OnlyStrings)){
             errors.name="name contains only alphabets"
         }
         if(!values.email){
             errors.email="enter email id"
         }
         if(!values.number){
             errors.number="enter ten digits number"
         }
         else if(values.number.length<10){
             errors.number="number not lessthan ten digits"
         }
         else if(values.number.length>10){
             errors.number="number not greaterthan ten digits"
         }
         return(errors)
     }
  return (
    <div className="container mt-5">
        <pre>{JSON.stringify(form)}</pre>
        <div className="row">
            <div className="col-md-8">
               <form  onSubmit={submithandler}>
                   <div className='form-group'>
                       <input type="text" name='name' className='mb-2 form-control' placeholder='Enter Name' onChange={ updatehandler} />
                    <span>{formerror.name}</span>
                   </div>
                   <div className='form-group'>
                       <input type="email" name='email' className='mb-2 form-control' placeholder='Enter email'onChange={ updatehandler}  />
                    <span>{formerror.email}</span>
                   </div>
                   <div className='form-group'>
                       <input type="number" name="number"className='form-control' placeholder='Enter number' onChange={ updatehandler} />
                       <span>{formerror.number}</span>
                   </div >
                   <input type="submit"  value="submit"  className='btn btn-primary'/>
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
                               store.map((s,index)=>{
                                  return <tr key={index}>
                                      <td>{s.name}</td>
                                      <td>{s.email}</td>
                                      <td>{s.number}</td>
                                  </tr> 
                               })
                           }
                            </tbody>
                   </table>
            </div>
        </div>
    </div>
  )
}

export default Form