import React from 'react'

// export default function UserView(props) {
//   return (
//     <div>
//         Name: {props.user.name} <br />
//         Email: {props.user.email} <br />
//     </div>
//   )
// }


// export default function UserView({user}) {
//     return (
//       <div>
//           Name: {user.name} <br />
//           Email: {user.email} <br />
//       </div>
//     )
//   }


export default function UserView({user, changeUid}) {
    let {id, name, email} = user; //destructuring
    return (
      <div onMouseEnter={()=> changeUid(id)}>
          Name: {name} <br />
          Email: {email} <br />
          <hr />
      </div>
    )
  }
