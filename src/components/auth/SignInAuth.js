import React, { Component } from 'react'

class SignInAuth extends Component {
    state = {
        email: '',
        password: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Iniciar Sesión</h5>
                    <div className="input-field">
                        <label htmlFor="email">Correo; </label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Contraseña: </label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInAuth
