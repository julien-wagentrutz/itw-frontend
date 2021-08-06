import React, {Component} from 'react';
import Database from "../utils/Database";

export default class Login extends Component
{
    constructor()
    {
        super();
        this.state =
            {
                inputEmailValue : '',
                inputPasswordValue : '',
                errorMessage: ''
            }
        this.isConnected = false
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        this.database = new Database()
    }

    render()
    {
        return <section className="login">
            <form className="auth" onSubmit={this.handleSubmit}>
                <h1>Sign in</h1>
                    <div className="auth__input">
                        <label className="auth__label auth__label-event" htmlFor="auth__input_email">
                            <input  className="auth__input-field"  value={this.state.inputEmailValue} id="auth__input_email" type="email" onChange={this.handleChange} required pattern="\S+.*" />
                            <span>Your email</span>
                        </label>
                    </div>
                    <div className="auth__input">
                        <label className="auth__label auth__label-event" htmlFor="auth__input_password">
                            <input  className="auth__input-field" value={this.state.inputPasswordValue} id="auth__input_password" type="password" onChange={this.handleChange} required pattern="\S+.*" />
                            <span>Your email</span>
                        </label>
                    </div>
                    <p className="auth__error-message">{this.state.errorMessage}</p>
                    <input className="auth__submit-button" type="submit" value="login"/>
            </form>
        </section>
    }

    //to get the new value of the input
    handleChange(_event)
    {
        _event.target.id == "auth__input_email" ? this.setState({inputEmailValue: _event.target.value}) : this.setState({inputPasswordValue: _event.target.value})
    }

    //to try to connect the user
    handleSubmit(_event)
    {
        _event.preventDefault();
        const user = this.database.authentification(this.state.inputEmailValue,this.state.inputPasswordValue)
        if(user !== undefined)
        {
            localStorage.setItem('currentUser',JSON.stringify(user))
             window.location.href = '/'
        }
        else
        {
            this.setState({errorMessage: "L'email ou le mot de passe est incorrect"})
        }
    }
}