import React from "react"
import { useEffect } from "react"
import { useState } from "react"
const Form3 = ()=>{
    const [state,setState] = useState({
        line1:"",
        line2:"",
        city:"",
        state:"",
        code:"",
        country:"",
        date:"",
        social:"",
        drive:"",
        id:"",
        passport:"",
        gridRadios:"",
        file:""
    })
    const [formerror,setFormerror] = useState({})

    const updateHandler = (event)=>{
        setState({...state,[event.target.name]:event.target.value})
    }
    const submitHandler = (event)=>{
        event.preventDefault()
        setFormerror(validate(state))
    }
    
    // useEffect(()=>{
    //     if((Object.keys(formerror).length===0)){

    //     }
    // },[formerror])
    const validate = (values)=>{
        const errors={}
        setFormerror(errors)
        const OnlyStrings = /^[a-zA-z]*$/
        if(!values.line1){
            errors.line1="ENTER THE MAILING ADDRESS LINE 1"
        }
        if(!values.line2){
            errors.line2="ENTER THE MAILING ADDRESS LINE 2"
        }
        if(!values.city){
            errors.city="ENTER THE CITY NAME"
        }
        else if(!values.city.match(OnlyStrings)){
            errors.city="CITY NAME SHOULD BE IN ALPHABETS"
        }
        if(!values.state){
            errors.state="SELECT THE STATE NAME"
        }
        if(!values.code){
            errors.code="ENTER THE ZIP CODE"
        }
        if(!values.country){
            errors.country="ENTER THE COUNTRY NAME"
        }
        else if(!values.country.match(OnlyStrings)){
            errors.country="COUNTRY NAME SHOULD BE IN ALPHABETS"
        }
        if(!values.date){
            errors.date="ENTER THE DATE"
        }
        if(!values.social){
            errors.social="ENTER THE SOCIAL SECURITY LAST 4"
        }
        else if(values.social.length<4){
            errors.social="NUMBER NOT LESSTHAN 4 DIGITS"
        }
        else if(values.social.length>4){
            errors.social="NUMBER NOT GREATERTHAN 4 DIGITS"
        }
        if(!values.gridRadios){
            errors.gridRadios="SELECT THE IDENTIFICATION"
        }
        if(!values.file){
            errors.file="UPLOAD THE IDENTIFICATION FILE"
        }
        return errors
    }

    return(
        <>
        <form onSubmit={submitHandler}>
        <div className="container mt-5">
        <center>Please enter a valid mailing address of your primary residence
            along with few of your personal details for identity verification.
            Please do not use a PO Box
        </center>
        <per>{JSON.stringify(state)}</per>
        <div className="row mt-5">
        <div className="col-md-6">               
                    <div className="form-group">
                        <input type="text" className="form-control"  placeholder="Mailng Address Line 1" name="line1" onChange={updateHandler}/>
                        <span>{formerror.line1}</span>
                    </div>
                </div>
                <div className="col-md-6">               
                    <div className="form-group">
                        <input type="text" className="form-control"  placeholder="Mailng Address Line 2" name="line2" onChange={updateHandler}/>
                        <span>{formerror.line2}</span>
                    </div>
                </div>
                <div className="col-md-3">               
                    <div className="form-group">
                        <input type="text" className="form-control"  placeholder="City" name="city" onChange={updateHandler}/>
                        <span>{formerror.city}</span>
                    </div>
                </div>
                <div className="col-md-3">               
                    <div className="form-group">
                        <select type="text" className="form-control" placeholder="State" name="state" onChange={updateHandler}>
                            <option>Andhar Pradesh</option>
                            <option>Telangana</option>
                            <option>Karnataka</option>
                        </select>
                        <span>{formerror.state}</span>
                    </div>
                </div>
                <div className="col-md-3">               
                    <div className="form-group">
                        <input type="number" className="form-control"  placeholder="Zip Code" name="code" onChange={updateHandler}/>
                        <span>{formerror.code}</span>
                    </div>
                </div>
                <div className="col-md-3">               
                    <div className="form-group">
                        <input type="text" className="form-control"  placeholder="Country" name="country" onChange={updateHandler}/>
                        <span>{formerror.country}</span>
                    </div>
                </div>
                <div className="col-md-3">               
                    <div className="form-group">
                        <input type="date" className="form-control"  placeholder="Date of Birth" name="date" onChange={updateHandler}/>
                        <span>{formerror.date}</span>
                    </div>
                </div>
                <div className="col-md-3">               
                    <div className="form-group">
                        <input type="number" className="form-control"  placeholder="Social Security Last 4" name="social" onChange={updateHandler}/>
                        <span>{formerror.social}</span>
                    </div>
                </div>
                <div className="col-md-6"> 
                    <div style={{"width":"1000px"}} className="expand-lg">
                        Select An Identification To Upload
                        <div style={{"display":"flex"}}>
                            <div className="col-md-2">
                                <div>
                                    <input type="radio" name="gridRadios"  value="text" onChange={updateHandler}/>Driver's Licence
                                    <span>{formerror.gridRadios}</span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div>                           
                                    <input type="radio" name="gridRadios"  value="text" onChange={updateHandler}/>State-Issued ID
                                    <span>{formerror.gridRadios}</span>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div>                            
                                    <input type="radio" name="gridRadios"  value="text" onChange={updateHandler}/>Passport
                                    <span>{formerror.gridRadios}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group col-md-12">    
                    <center>
                        <input type="file" name="file" style={{"width":"100px"}} placeholder="Upload Identification File"/>
                        {/* <textarea type="file" name="file" style={{"width":"300px"}} placeholder="Upload Identification File">
                            
                        </textarea> */}
                        <span>{formerror.file}</span>
                    </center>
                </div>
                <div>
                    <div>
                        <input type="submit" className="btn btn-success" value="SUBMIT"/>
                    </div>    
                </div>                
        </div>

        </div>
        </form>
        </>
    )
}
export default Form3