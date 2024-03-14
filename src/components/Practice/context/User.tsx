import React , {useContext, useState} from 'react'
import { UserContext } from './UserContext'



export const User = () => {
    const userContext = useContext(UserContext)

    const handleLogin = () => {
        userContext?.setUser({name: 'aaa',email: 'aaa@gmail.com'})
    }
    const handleLogout = () => {
        userContext?.setUser(null)
    }
    
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h2>User name is {userContext.user?.name}</h2>
        </div>
    )
}