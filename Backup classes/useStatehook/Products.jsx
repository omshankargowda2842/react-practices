import React,{useState} from 'react'
let Products=()=>{
let[Products,setProducts]=useState({
                                  name:"apple",
                                  price:30,
                                  qty:1,
                                  totalprice:30
                                 })
   let [fruit,setfruit] =useState(                            
                                 {
                                    name:"orange",
                                    price:20,
                                    qty:1,
                                    totalprice:20   
                                 })
                                
let decrhandler=(value)=>{
    setProducts({ ...Products,qty:Products.qty-1})}
let decrhandler1=(value)=>{
    setfruit({...fruit,qty:fruit.qty-1})

}
let incrhandler=(value)=>{
    setProducts({...Products,qty:Products.qty+1})}
 let incrhandler1=(value)=>{
    setfruit({...fruit,qty:fruit.qty+1})
}
    return( <div className="container">
        <div className="row">
            <div className="col-md-8">
                <table className="table table-hover">
                    <thead classaName= 'bg-dark'>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total price</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                          <td>{Products.name}</td>
                          <td>{Products.price}</td>
                          <td> 
                             <button name='value' onClick={ decrhandler}>-</button>
                              {Products.qty}
                              <button name='value' onClick={incrhandler}>+</button>
                              </td>
                          <td>{Products.qty*Products.price}</td>
                      </tr>
                     
                      <tr>
                          <td>{fruit.name}</td>
                          <td>{fruit.price}</td>
                          <td> 
                             <button name='value' onClick={ decrhandler1}>-</button>
                              {fruit.qty}
                              <button name="value" onClick={incrhandler1}>+</button>
                              </td>
                          <td>{fruit.qty*fruit.price}</td>
                      </tr>
                      <tr text-align="right">
                         
                      </tr>

                     </tbody>
                   <center><p > total ={((fruit.qty*fruit.price)+(Products.qty*Products.price))}</p></center>
                </table>
            </div>
        </div>
    </div>
    
    
    )

    }

export default Products