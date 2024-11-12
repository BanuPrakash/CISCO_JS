import React, { useEffect, useState } from 'react'

export default function UserDetails({uid}) {
 let [user, setUser] = useState();
  // componentDidUpdate
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + uid)
    .then(response => response.json())
    .then(data => setUser(data));
  }, [uid]);
  
  return (
    <div>
        <h1>UserDetails</h1>
        {
        user && <div>
            UserName: {user.username} <br />
            City: {user.address.city} <br />
            Website: { user.website} <br />
        </div> 
        }
    </div>
  )
}
