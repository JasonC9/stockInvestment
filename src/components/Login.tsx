import React from "react";
import "./Login.css";

function Login() {
    return (
        <div className="card">
        <form>
        <h2 className="form_title">MJ's Investment</h2>
            <h2 className="form_login">Login</h2>
            <div className="form_input-group">
            <label htmlFor="username">Username</label>
            <input className="form_input" placeholder="Username"  required/>
            </div>

            <div className="form_input-group">
            <label htmlFor="password">Password</label><br />
            <input className="form_input" type="password" placeholder="Password" required />
            </div>

            <button className="btn" type="submit">Login</button>
            <p id="form_text">
                <a className="form_link" href="#" id="linkCreateAccount">Create Account</a>
            </p>
        </form>
        </div>
    )
}

export default Login;