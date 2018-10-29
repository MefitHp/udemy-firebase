import React from 'react'
import { Link } from 'react-router-dom'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

const Navbar = () => (
    <nav className="nav-wrapper grey darken-3">
        <div className="container">
            <Link to="/" className="brand-logo">MefitHp</Link>
        </div>
        <SignedIn />
        <SignedOut />
    </nav>
)

export default Navbar