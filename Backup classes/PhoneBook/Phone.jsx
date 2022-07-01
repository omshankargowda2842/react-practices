import React ,{useState,useEffect} from 'react'
export const Phone = () => {
    const [phone,setPhone]=useState({First:"",
                                    Last:"",
                                     Number:"",
                                       })
    const [store,setstore]=useState([])   
    const [formerror,setformerror]=useState({}) 
    const [issubmit,setIssubmit]=useState(true)
                                   
      const ChangeHandler=(e)=>{
                setPhone({...phone,[e.target.name]:e.target.value})
      }
      const Submithandler=(e)=>{
         e.preventDefault()
          setformerror(validate(phone))
          setIssubmit(true)
     //     console.log(phone);
      }
      const delateHandler=(indexvalue)=>{
        const filtredstore=store.filter((elem,index)=>index!==indexvalue)
         setstore(filtredstore)
      }
      
      useEffect(()=>{
        if(Object.keys(formerror).length===0 && issubmit){   
          const newstore=[...store,phone]
          setstore(newstore)
        }
      },[formerror])
      const validate=(values)=>{
        const errors={}
        setformerror(errors)
        const OnlyStrings=/^[a-zA-z]*$/
        if(!values.first){
          errors.first=' please Enter First name is required'
        }
        else if(!values.first.match(OnlyStrings)){
          errors.first='Please enter only alphabets'
        }
        else if(!values.email){
          errors.email=' please Enter Last name is required'
        }
        else if(!values.email.match(OnlyStrings)){
          errors.email='Please enter only alphabets'
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
    <div>Phonetext
     <form onSubmit={Submithandler}>
         <div className='mb-3 d-md-flex'>
         
<div className='w-50 me-2'>
<input type='text' value={phone.First} name='First'onChange={ChangeHandler} className='form-control' placeholder='enter first name' />
 <p className='text-danger'>{formerror.First}</p>
  </div>             
   <div className='w-50 ms-1'>
   <input type='text' name='Last' value={phone.Last} onChange={ChangeHandler} className='form-control' placeholder='enter last name' />
   <p className='text-danger'>{formerror.Last}</p>
     </div>
     <div className='w-50 ms-1'>         
     <input type='number' name='Number'value={phone.Number} onChange={ChangeHandler} className='form-control' placeholder='enter number'/>
     <p className='text-danger'>{formerror.Number}</p>
     </div>  
      <input type='submit' className='btn btn-primary btn-sm' value='add to contacts'/>
         </div>

  

     </form>
     <div>
       <table className='table table-hover'>
         <thead >
           <tr>
             <th>First name</th>
             <th>Last name</th>
             <th>Number</th>
           </tr>
         </thead>
            <tbody>
              {
                store.map((e,index)=>{
                  return (<tr key={index}>
                    <td>{e.First}</td>
                    <td>{e.Last}</td>
                    <td>{e.Number}</td>
                    <td>
                      <i className='fas fa-trash' onClick={()=>delateHandler(index)}></i>
                    </td>
                  </tr>)
                })
              }
            </tbody>
       </table>
     </div>
    </div>
  )
}

export default Phone