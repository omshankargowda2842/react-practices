import React, { Component } from 'react'

 class Contactlist extends Component {
  render() {
    return <div className="container">
       
         <div className="row">
            <div className="col-md-8">
          <center><h1> Contact List</h1></center>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            this.props.contacts.map((contact,index)=>{
                                return <tr key={index}>
                                    <td>{contact.login.uuid.substring(32,36)}</td>
                                    <td>{contact.name.first}</td>
                                    <td> {contact.email} </td>
                                    <td>{contact.gender}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
         
        </div>

    </div>
        
      
    
  }
}

export default Contactlist
