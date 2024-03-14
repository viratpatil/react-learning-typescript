import React from 'react';

type GreetProps = {
    name: string
    message: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <div> {
            props.isLoggedIn ? <h2>Welcome to Typescript  {props.name} {props.message}</h2> : 
            <h2>Welcome to Typescript Guest {props.name} {props.message}</h2>
        }
        </div>
    )
}


