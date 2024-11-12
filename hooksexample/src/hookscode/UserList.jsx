import React, { useEffect, useState } from 'react'
import UserView from './UserView';

export default function UserList({changeUid}) {
  let [users, setUsers] = useState();
  
   // same as componentDidMount
    // get called after first render
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setUsers(data));
    },[]);


  return (
    <div>
        <h1>UserList</h1>
        {
            users && users.map(user => <UserView 
                key={user.id} 
                user={user} 
                changeUid={changeUid}/>)
        }    
    </div>
  )
}
