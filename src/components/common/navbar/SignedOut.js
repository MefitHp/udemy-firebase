import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedOut = () => (
    <ul className="right">
        <li><NavLink to="/" > Iniciar Sesión</NavLink></li>
        <li><NavLink to="/" > Registrarse</NavLink></li>
    </ul>
)

export default SignedOut