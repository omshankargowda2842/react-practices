import React from 'react'

import Users from './Users'
const itterate = () => {
  return (
    <div className="Users">
        <div className="container">
        <table className='table table-hover mt-5'> 
            <thead className='bg-dark text-white'> 
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>State</th>
                </tr>
            </thead>
            <tbody>
            {
          Users.map((User)=>{
           return <tr key={User.id}>
               <td>{User.id}</td>
               <td>{User.name}</td>
               <td>{User.state}</td>
           </tr>
          })
      }
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default itterate
