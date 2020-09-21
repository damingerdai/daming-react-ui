import React from 'react';
import { GuestGreeting } from './GuestGreeting';
import { UserGreeting } from './UserGreeting';

export function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting/>
    } else {
        return <GuestGreeting/>
    }
}