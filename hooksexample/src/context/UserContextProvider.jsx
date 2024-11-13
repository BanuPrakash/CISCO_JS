import { createContext, useState } from "react";

export const UserContext = createContext(); // placeholder for state

export default function UserContextProvider({children}) {
    let [avatar, setAvatar] = useState("sample.png"); // after login
    let [name, setName] = useState("Banu Prakash"); // after login

    return <UserContext.Provider value={{name: name, avatar}}>
           {children}
    </UserContext.Provider>
}