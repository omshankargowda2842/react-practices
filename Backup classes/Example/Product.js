import React from 'react'

const Product = () => {
    
        let products=[{   name:"apple",
                          price:30,
                           qty:1,
                          totalprice:30
                     },
                     {
                           name:"orange",
                           price:20,
                           qty:1,
                           totalprice:20   
                     }]
  return (
    <div>
        <h1> fruits</h1>
     < pre>{ JSON.stringify(products)}</pre>
     <table className='table table-hover'>
         <thead className="bg-dark text-white">
             <tr>
                 <td>Name</td>
                 <td>Price</td>
                 <td>Quantity</td>
                 <td>Total price</td>
                 
             </tr>
         </thead>
         <tbody> {
         products.map((product,index)=>{
             return <tr key={index}>
                 <td>{product.name}</td>
                 <td>{ product.price}</td>
                 <td>{product.qty}</td>
                 <td>{product.qty*product.price}</td>
             </tr>
         })
     }</tbody>
     </table>
    
    </div>
  )
}
export default Product
