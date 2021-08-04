import React, { useState, useEffect } from 'react';
import axios from 'axios';
import{Table,} from 'react-bootstrap'

 
export const UserList = () => {
    const [users,setUsers] = useState([])
useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>{
        console.log(res.data)
        setUsers(res.data)
    })
    .catch(err => {
console.log(err)
    })
},[])
return (
        <div>
            <Table striped bordered hover>
  <thead>
 
  
      <th> Name</th>
      <th>Username</th>
      <th>Phone</th>
      <th>email</th>
      <th>website</th>
   
  </thead>


            
            
                {
            users.map(user =>  <tbody>
             
                
                  <th>  {user.name}</th>
                  <th> {user.username}</th>
                  <th>{user.phone}</th>
                  <th>{user.email}</th>
                  <th>{user.website}</th>
                
           
                  </tbody>  
               
            
                
                
                )
        }
            </Table>
        </div>
    )
}
