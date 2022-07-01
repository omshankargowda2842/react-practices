import React,{useState,useEffect}from 'react'

const Phone1234 = () => {
    let[form,setForm]=useState({
                        name:"",
                        email:"",
                        number:""
    })
    let[store,setStore]=useState([])
    let[ ferror,setfError]=useState({})
    let[submit,setSubmit]= useState(false)

    let updatehandler=(a)=>{ 
        setForm({...form,[a.target.name]:a.target.value})
    }
    let  submithandler=(a)=>{ 
        a.preventDefault()
        setfError(validate(form))
        setSubmit(true)
    }
    
    useEffect(()=>{
        if(Object.keys(ferror).length===0 && submit){
            let newstore=[...store,form]
            setStore(newstore)
        }
    },[ferror])



let validate=(values)=>{
 let errors={}
 setfError(errors)
        const OnlyStrings=/^[a-zA-z]*$/
        if(!values.name){
          errors.name=' please Enter First name is required'
        }
        else if(!values.name.match(OnlyStrings)){
          errors.name='Please enter only alphabets'
        }
        if(!values.email){
          errors.email=' please Enter Email ID is required'
        }
        if(!values.number){
          errors.number=' Please Enter Mobile Number'
        }
        else if(values.number.length>10){
          errors.number='Please  enter mobile number only 10 nubers'
        }
        else if(values.number.length<10){
          errors.number='Mobile Number maximum is 10 numbers only'
        }
        return errors
}
    

    
  return (
    <div className="container mt-5">
        <pre>{JSON.stringify(form)}</pre>
      <div className="row">
        <div className="col-md-8">
            <form  onSubmit={submithandler}>
                <div className='form-group'>
                    <input type="text" name="name" className='form-group' placeholder="Enter Name" onChange={updatehandler} />
                    <span>{ferror.name}</span>
                </div>
                <div className='form-group'>
                    <input type="email" name='email' className='form-group' placeholder="Enter Email" onChange={updatehandler} />
                    <span>{ferror.email}</span>
                </div>
                <div className='form-group'>
                    <input type="number"  name='number' className='form-group' placeholder="Enter Number" onChange={updatehandler} />
                    <span>{ferror.number}</span>
                </div>
                <input type="submit"  />
            </form>
            <table className="table table-hover">
            <thead><tr>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                </tr>
                </thead>
            <tbody>
                {
                    store.map((a,index)=>{
                      return <tr key={index}>
                        <td>{a.name}</td>
                        <td>{a.email}</td>
                        <td>{a.number}</td>
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

export { Phone1234}
