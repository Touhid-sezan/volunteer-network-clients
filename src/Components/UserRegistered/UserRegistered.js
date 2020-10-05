import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './UserRegistered.css';

const UserRegistered = () => {
    const [userRegistered, setUserRegistered] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    useEffect(() => {
        fetch('https://fierce-ocean-51131.herokuapp.com/myRegistrations?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setUserRegistered(data))
    },[])
    return (
        <div>
            <h1>Hello {loggedInUser.name}</h1>
            <h3>You have {userRegistered.length} registered services</h3>
            {
                userRegistered.map(register => <div className="registered"><h4>{register.service}</h4> <h4>{register.date}</h4> </div>)
            }
        </div>
    );
};

export default UserRegistered;