import React from 'react';

const Welcome = ({ user }) => {
    return (
        <div>
            <img src={user.photoURL} alt="" />
            <h1>Welcome</h1>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
    );
};

export default Welcome;