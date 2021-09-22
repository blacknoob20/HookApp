import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const HomePage = () => {
    const userContext = useContext(UserContext);

    console.log(userContext);

    return (
        <div>
            <h1>Home Page</h1>
            <hr/>
        </div>
    )
}
