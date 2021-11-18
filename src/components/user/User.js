import React from 'react';
import './User.css'

export const User = (props) => {

    const {user: {username, first_name, last_name, email, user_type}} = props;

    return (
        <div className="users">
            <p className="user">{username}</p>
            <p className="user">{first_name}</p>
            <p className="user">{last_name}</p>
            <p className="user">{email}</p>
            <p className="user">{user_type}</p>
            <button className="btn" onClick={()=>{}}>Select</button>
            <button className="btn" onClick={()=>{}}>Delete</button>
        </div>
    );
}
