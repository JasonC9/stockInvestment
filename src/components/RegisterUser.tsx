import React, { useState } from "react";
import './Login.css';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";

function RegisterUser() {
    const history = useHistory();

    const user = {
        first_name: "",
        username: "",
        pass_word: "",
        is_admin: 0
    }

    const [input, setInput] = useState(user);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const next = (e: any) => {
        
        e.preventDefault();
        let user = {first_name: input.first_name, username: input.username, pass_word: input.pass_word, is_admin: 0 };
        console.log('user' + JSON.stringify(user));

        fetch("/user", {method:"POST", headers:{"Content-Type":"application/json"}, credentials:"include", body: JSON.stringify(user)})
        .then(response => response.text())
        .then(id =>history.push(`/creditCard`)
        );
    }

    return (
        <div>
            <form className="card">
                <h2 className="form_register">Register User</h2>
                <div className="form_input-group">
                <label htmlFor="name">First Name</label>
                <input className="form_input" name="first_name" placeholder="Enter first name" required value={input.first_name}
                onChange={handleChange}/>
                </div>

                <div className="form_input-group">
                <label htmlFor="username">Username</label>
                <input className="form_input" type="username" name="username" placeholder="Enter username" required value={input.username}
                onChange={handleChange} />
                </div>

                <div className="form_input-group">
                <label htmlFor="password">Password</label>
                <input className="form_input" type="password" name="pass_word" placeholder="Enter password" required value={input.pass_word}
                onChange={handleChange} />
                </div>
               
                <button className="btn_color" type="submit" onClick={next}>Next</button><br />
              
                <p id="form_text">
                <a className="form_link" href="/login" id="linkCreateAccount">Already have account</a>
                </p>

              
            </form>
        </div>


    )
}

export default RegisterUser;