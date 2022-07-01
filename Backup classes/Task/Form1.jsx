import React,{useState} from 'react'

const Form1 = () => {
    let[ data,setData]=useState({
                 name:"hello"  
    })
    let updatehandler=(value)=>{
        setData({name:value})
    }
  return <><div className="container">
    <pre>{JSON.stringify(data.name)}</pre>
       <div className="col-md-2">
                    <div>
                        <input type="radio" onClick={updatehandler.bind( this,"Apply for driving licence ")} value="text" />Driver's Licence
                    </div>
                </div>
                <div className="col-md-2">
                    <div>                           
                        <input type="radio"   onClick={updatehandler.bind(this,"Apply for State-Issued ID" )} value="text" />State-Issued ID
                    </div>
                </div>
                <div className="col-md-2">
                    <div>                            
                        <input type="radio"  onClick={updatehandler.bind(this ,"Apply for Passport")}  value="text" />Passport
                    </div>
                </div>
                </div>
  </>
  
}

export default Form1
