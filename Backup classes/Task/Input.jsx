import React from 'react'
import "./Form.css"
const Input = () => {
  return (
    <>
        {/* //     <div>
//       <fieldset className="a b form-control" type="text" placeholder="Mailing Address Line 1" name="line1"  style={{"margin-left":"10px;"}}>
    
// </fieldset>
//     </div> */}

    <div class="form">
  <input type="text" id="email" class="form__input" autocomplete="off" placeholder=" "/>
<label for="email" class="form__label">Email</label>
</div>
    </>

  )
}

export default Input
