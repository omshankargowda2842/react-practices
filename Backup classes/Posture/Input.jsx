import React from "react";
let Input=()=>{
return<div className="container bg-dark text-white">
    <form>
      <div className="row mt-5" style={{columnGap:"20px",justifyContent:"center"}}>
        <div className=""> <h5 className="mt-5">sign up for our new sletter</h5></div>
        <div className="email_block">
            <div className="form-group">
                <input type="text" className="form-control mt-5 bg-dark text-white" placeholder="Enter "  />
            </div>
        </div>
        <div className="">
        <div className="form-group">
                <input type="button" className="form-control mt-5 bg-dark text-white"value="subscribe" style={{"width":"90px"}} />
            </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12"> <center><h5>© 2020 Copyright: MDBootstrap.com</h5></center></div>
       
      </div>
      </form>
</div>
}
export default Input