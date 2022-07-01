import React from 'react';
let Form =()=>{
 return <div>
       <div className="container mt-5">
        <center>Please enter a valid mailing address of your primary residence along with few of your personal details for identity verification. Please do not use a PO Box </center>
       < form>
        <div className="row mt-5">
            <div className="col-md-6">
                
                
                    <div className="form-group">
                        <input type="text" className="form-control"  placeholder=" Mailng Address Line 1"/>
                    </div>
                
            </div>
            <div className="col-md-6">
            
                    <div className="form-group">
                        <input type="text" className="form-control"  placeholder=" Mailng Address Line 2"/>
                    </div>
                
                </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-3">
               
                <div className='form-group'>
                   < input className="form-control" type="text" placeholder="City"/>
                </div>
                 
            </div>
            <div className="col-md-3">
               
                <div className='form-group'>
                   < input className="form-control" type="text" placeholder="State"/>
                </div>
                 
            </div>
            <div className="col-md-3">
               
                <div className='form-group'>
                   < input className="form-control" type="number" placeholder="Zip Code"/>
                </div>
                 
            </div>
            <div className="col-md-3">
               
                <div className='form-group'>
                   < input className="form-control" type="text" placeholder="Country"/>
                </div>
                 
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-3">
                
                    <div className="form-group" >
                        <input  className="form-control"type="" placeholder="Date Of Birth"/>
                    </div>
                
            </div>
            <div className="col-md-3">
                
                    <div className="form-group" >
                        <input  className="form-control"type="number" placeholder="Social Security Last 4"/>
                    </div>
                
            </div>   
            
            <div className="col-md-2">
                    <div  >
                      <input type="checkbox"  value="text" />Driver's Licence
                     </div>
            </div>
            <div className="col-md-2">
                    <div  >
                        
                      <input type="radio"  value="text" />State-Issued ID
                     </div>
            </div>
            <div className="col-md-2">
                    <div  >
                        
                      <input type="radio"  value="text" />Passport
                     </div>
            </div>
             
        </div>
        <center>
            <textarea className="mt-5  text-black " style={{ "width":"250px" ,"height":"100px"}}><p>omshankar is a good boy he is doing well and one frnd name kiran ,he disturbed him very much so now he is not able to concentrate on studies </p></textarea>
            </center>
            </form>
       </div>
       
       </div>
}
export default Form