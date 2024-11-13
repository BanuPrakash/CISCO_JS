import React, { useContext } from 'react'
import { UserContext } from './UserContextProvider'

export default function Third() {
    //     let {avatar, name} = useContext(UserContext); //Consumer
    //   return (
    //     <div>
    //         Third <br />
    //         Avatar: {avatar} <br />
    //         Name: {name}

    //     </div>
    //   )

    return (
        <UserContext.Consumer>
            {
                value => <div>
                    Name : {value.name} <br />
                    Avatar: {value.avatar}
                </div>

            }
        </UserContext.Consumer>
    )
}
