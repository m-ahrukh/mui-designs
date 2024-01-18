'use client'
import { useState } from "react";

// Define two components
const LoginButton = (props) => {
    return <>
        <div>
            <p>You are logged out</p>
            <p>See you soon</p>
        </div>
        <div><button className="bg-blue-400 p-3 rounded" onClick={props.toggleLoggedIn}>Log In</button></div>
    </>
}

const LogoutButton = (props) => {
    return <>
        <div>
            <p>You are now logged in</p>
            <p>Welcome, It is conditional rendering example</p>
        </div>
        <div><button className="bg-blue-400 p-3 rounded" onClick={props.toggleLoggedIn}>Log Out</button></div>
    </>
}

function ConditionalRendering() {
    const [loggedIn, setLoggedIn] = useState(false);

    const toggleLoggedIn = () => {
        setLoggedIn((currState) => {
            return !currState;
        })
    }

    const [showWarning, setShowWarning] = useState(true);

    const handleToggleClick = () => {
        setShowWarning((prevShowWarning) => !prevShowWarning);
    };

    if (loggedIn)
        return <LogoutButton toggleLoggedIn={toggleLoggedIn} />
    else
        return <LoginButton toggleLoggedIn={toggleLoggedIn} />

}

export default ConditionalRendering;