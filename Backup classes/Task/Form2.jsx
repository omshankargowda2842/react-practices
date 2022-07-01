import React,{useState} from "react"
import "./Form.css"
const Form = ()=>{
    let[store,setStore]=useState({
                          address1:"",
                          address2:"",
                          city:"",
                          state:"",
                          zipcode:"",
                          country:"",
                          dob:"",
                          security:"",

    })
    let[ error,setError]=useState({})
    let[ data,setData]=useState({
                name:"Upload for?"
    })
    let updatehandler=(value)=>{
        
        setData({name:value})
    }
    let userhandler=(event)=>{
      setStore({...store,[event.target.name]:event.target.value})
    }
     let submithandler=(event)=>{
        event.preventDefault()
        setError(validation(store))

     }
     let validation=(values)=>{
       let errors={}
       setError(errors)
       let OnlyStrings=/^[a-zA-z]*$/
       if(!values.address1){
        errors.address1="Enter address"
       }
        if(!values.address2){
        errors.address2="Enter  address"
       }
       if(!values.city){
        errors.city="enter city name"
       }
       else if(!values.city.match(OnlyStrings)){
           errors.city="city name should contains only alphabets"
       }
       if(!values.country){
        errors.country="enter country name"
       }
       else if(!values.country.match(OnlyStrings)){
                errors.country="country name should be alphabets"
       }
       if (!values.security){
        errors.security="please enter this field"
       }
       else if(values.security.length>4){
        errors.security="zipcode should be only 4 numbers"
       }
        if( !values.zipcode){
        errors.zipcode="enter this field"
       }
       else if(values.zipcode.length>6){
        errors.zipcode="zipcode should be only 6 numbers"

       }
       else if(values.zipcode.length<6){
        errors.zipcode="zipcode must be  6 numbers"

       }
       if (!values.state){
        errors.state=" please enter the city"
       }
       if(!values.country){
        errors.country="please enter country"
       }
       if(!values.dob){
        errors.dob=" enter ur date-of-birth"
       }

       return errors
     }

    return(
        <>
        <form onSubmit={submithandler}>
        <div className="container mt-5">
        <center>Please enter a valid mailing address of your primary residence
            along with few of your personal details for identity verification.
            Please do not use a PO Box
        </center>
       
        
        <div className="row mt-5">
        <div className="col-md-6">               
                    <div className="form-group">
                        <input type="text" name="address1" className="form-control"  placeholder="Mailng Address Line 1" onChange={userhandler}/>
                        <span>{error.address1}</span>
                    </div>
                </div>
                <div className="col-md-6">               
                    <div className="form-group">
                        <input type="text" name="address2" className="form-control"  placeholder="Mailng Address Line 2"  onChange={userhandler}/>
                        <span>{error.address2}</span>
                    </div>
                </div>
                <div className="col-md-3">               
                    <div className="form-group">
                        <input type="text"  name="city"className="form-control"  placeholder="City" onChange={userhandler}/>
                        <span>{error.city}</span>
                    </div>
                </div>
                <div className="col-md-3">               
                    <div className="form-group">
                        <select type="text" name="state" className="form-control" placeholder="State" onChange={userhandler}>
                            <option> select the state----</option>
                            <option>Andhar Pradesh</option>
                            <option>Telangana</option>
                            <option>Karnataka</option>
                            <option>odissa</option>
                        </select>
                        <span>{error.state}</span>
                    </div>
                </div>
                <div className="col-md-3">               
                    <div className="form-group">
                        <input type="number"  name="zipcode"className="form-control"  placeholder="Zip Code" onChange={userhandler}/>
                    </div>
                    <span>{error.zipcode}</span>
                </div>
                <div className="col-md-3">               
                    <div className="form-group">
                        <input type="text" name="country"className="form-control"  placeholder="Country" onChange={userhandler}/>
                    </div>
                    <span style={{"text-color":"red"}}>{error.country}</span>
                </div>
                <div className="col-md-3">               
                    <div className="form-group">
                        <input type="date" name="dob" className="form-control"  placeholder="Date of Birth" onChange={userhandler}/>
                    </div>
                   < span>{error.dob}</span>
                </div>
                <div className="col-md-3">               
                    <div className="form-group">
                        <input type="number" name="security" className="form-control"  placeholder="Social Security Last 4" onChange={userhandler}/>
                    </div>
                    <span>{error.security}</span>
                </div>
                <div className="col-md-6"> 
                <div style={{"width":"1300px"}} >
                    Select An Identification To Upload
                    <div style={{"display":"flex"}}>
                    <div className="col-md-2">
                    <div>
                        <input type="radio" onClick={updatehandler.bind( this,"Apply for driving licence ")} name="textfield"  value="text" />Driver's Licence
                    </div>
                </div>
                <div className="col-md-2">
                    <div>                           
                        <input type="radio"   onClick={updatehandler.bind(this,"Apply for State-Issued ID" )} name="textfield" value="text" />State-Issued ID
                    </div>
                </div>
                <div className="col-md-2">
                    <div>                            
                        <input type="radio"  onClick={updatehandler.bind(this ,"Apply for Passport")} name="textfield" value="text" />Passport
                    </div>
                </div>
                </div>
                </div>
                </div>
        </div>
       < center className="mt-5"><pre className="pre">{JSON.stringify(data.name)}</pre><input type="submit" value="submit"/></center>
        </div>
        
        </form>
        </>
    )
}
export default Form