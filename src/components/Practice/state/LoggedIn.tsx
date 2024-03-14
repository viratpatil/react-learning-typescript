import React , {useState} from 'react'

export const LoggedIn = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {}
    const handleLogout = () => {}

    return (
        <div>
            <button>Login</button>
            <button>Logout</button>
            <h2>User is logged {isLoggedIn ? 'in' : 'out'}</h2>
        </div>
    )
}