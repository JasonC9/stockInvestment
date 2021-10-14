import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Login.css";

function Login() {

    const history = useHistory();

    const initialFormData = {
        username: "",
        password: "",
    }

    const [formData, updateFormData] = useState(initialFormData);

    const sendLogin = async (user:String, pass:String) => {
        let data = {
            username: user,
            password: pass,
        }
        let response = fetch("/auth/loginUser", {method:"POST", headers:{"Content-Type":"application/json"}, credentials:"include", body: JSON.stringify(data)});
        
        let result = (await response).text();
        
        if (await result === "success") {
            history.push("/mjinvestments/home");
        } else {
            alert("Incorrect username or password!")
        }
        
    }

    const handleChange = (e:any) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        // console.log(formData.username);
        // console.log(formData.password);
        await sendLogin(formData.username, formData.password);
    }

    return (
        <div className="card">
        <form onSubmit={handleSubmit}>
        <h2 className="form_title">MJ's Investment</h2>
            <h2 className="form_login">Login</h2>
            <div className="form_input-group">
            <label htmlFor="username">Username</label>
            <input className="form_input" onChange={handleChange} name="username" placeholder="Username"  required/>
            </div>

            <div className="form_input-group">
            <label htmlFor="password">Password</label><br />
            <input className="form_input" onChange={handleChange} name="password" type="password" placeholder="Password" required />
            </div>

            <button className="btn" type="submit">Login</button>
            <p id="form_text">Don't have an account </p>
            <p id="form_text">
                <a className="form_link" href="/register" id="linkCreateAccount">Create Account</a>
            </p>
        </form>
        </div>
    )
}

export default Login;