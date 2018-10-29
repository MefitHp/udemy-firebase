import React from 'react'
import { NavLink } from 'react-router-dom'

const SignedIn = () => (
    <ul className="right">
        <li><NavLink to="/" > Nuevo Proyecto</NavLink></li>
        <li><NavLink to="/" > Cerrar Sesión</NavLink></li>
        <li><NavLink to="/" className="btn btn-floating pink lighten-1">MH</NavLink></li>
    </ul>
)

export default SignedIn