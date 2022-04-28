import React from "react";
import Logo from './Logo.png';
import MailForm from "../components/mailForm";


function SignUpPage() {
    return (
        <div>
            <header>
                <img className="Logo-oben-login" src={Logo} alt=''/>
                <div className="link-box">
                        <span className="Signup1">Signup</span>
                        <span className="Login1">Login</span>
                </div>
            </header>
            <body>
                <MailForm/>
                    <div className="password-form1">
                        <form className="paswword-form">
                            <label className="password-label" for="password">password</label>
                            <input className="password-input" type="password" id="password" name="password"></input>
                        </form>
                    </div>
                <button className="LoginButton">sign up</button>
            </body>
        </div>
    );
}

export default SignUpPage;