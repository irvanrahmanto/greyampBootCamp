import React, {useEffect, useState} from "react";
import '../login-form/LoginForm.css'

function LoginForm() {
    const [errorMessage, setErrorMessage] = useState({});
    const [username, SetUsername] = useState("");
    const [password, SetPassWord] = useState("");
    const [submit, setSubmit] = useState(false);

    const handleUserName = (event) => {
        SetUsername(event.target.value)
    }

    const handlePassword = (event) => {
        SetPassWord(event.target.value)
    }

    const renderErrorMessage  = (name) => name === errorMessage.name &&(
        <div className="error">{setErrorMessage.message}</div>
    )

    const handleSubmitBtn = (event) => {
        event.preventDefault();
        setSubmit(true);
    }

    useEffect(() => {
        console.log(submit);
        if (submit) {
            alert("login button submit")
        }
    }, [submit])

    return(
        <div className="form">
            <form form onSubmit = {handleSubmitBtn} >
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" value={username} onChange={handleUserName} required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" value={password} onChange={handlePassword} required/>
                </div>
                <div className="button-container">
                    <button type="submit">Login</button>
                </div>
            </form>
    </div>
    )
}

export default LoginForm;