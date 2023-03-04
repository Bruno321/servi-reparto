import React,{ createContext, useState } from "react";

export const LoginContext = createContext()
const Provider = ({children})=> {
    const [isAuth,setIsAuth] = useState(()=>{
        return window.localStorage.getItem('token')
    })

    const value = {
        isAuth,
        login:(token)=>{
            setIsAuth(true)
            window.localStorage.setItem('token',token)
            location.reload();
        },
        logOut:()=>{
            setIsAuth(false)
            window.localStorage.removeItem('token')
            location.reload();
        },
    }

    return (
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    )
}

export default {
    Provider,
    Consumer: LoginContext.Consumer
}