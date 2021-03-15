import React from 'react';

const SignUpForm = ({ handleSubmit, handleOnchange }) => {
    return (
        <div>
            <h1>Our Own Authentication</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" onChange={handleOnchange} placeholder="Enter Your Email" /><br />
                <input type="password" name="password" onChange={handleOnchange} id="" placeholder="Enter Your Password" /><br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default SignUpForm;