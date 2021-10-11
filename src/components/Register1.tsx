import React from "react";

function Register1() {
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input placeholder="Type in your full name" />

            <label htmlFor="username">Username</label>
            <input type="username" placeholder="Enter username" />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter password" />
            
            <button type="submit">Next</button><br />
            <p id="form_text">
                <a className="form_link" href="Login.tsx" id="linkLogin">Already have Account</a>
            </p>
        </form>


    )
}

export default Register1;