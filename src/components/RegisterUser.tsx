import React from "react";

function RegisterUser() {
    return (
        <div>
            <form className="card">
                <h2 className="form_register">Register User</h2>
                <div className="form_input-group">
                <label htmlFor="name">Name</label>
                <input className="form_input" placeholder="Full name" required/>
                </div>

                <div className="form_input-group">
                <label htmlFor="username">Username</label>
                <input className="form_input" type="username" placeholder="Enter username" required/>
                </div>

                <div className="form_input-group">
                <label htmlFor="password">Password</label>
                <input className="form_input" type="password" placeholder="Enter password" required/>
                </div>
                
                <button className="btn" type="submit">Next</button><br />
                <p id="form_text">
                    <a className="form_link" href="Login.tsx" id="linkLogin">Already have Account</a>
                </p>
            </form>
        </div>


    )
}

export default RegisterUser;