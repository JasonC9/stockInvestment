import React from "react";

function Login() {
    return (
        <form>
            <label htmlFor="username">Username</label><br />
            <input placeholder="Username" /><br />

            <label htmlFor="password">Password</label><br />
            <input type="password" placeholder="Password" /><br />

            <button type="submit">Login</button><br />
            <p id="form_text">
                <a className="form_link" href="#" id="linkCreateAccount">Create Account</a>
            </p>
        </form>
    )
}

export default Login;