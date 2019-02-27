import React from 'react'
import { Link } from 'react-router-dom';



function Header() {
    return (
        <header style={headerStyle()}>
            <h1>Bucket List</h1>
            <Link style={linkStyles()} to="/">Home</Link> | <Link style={linkStyles()} to="/about">About</Link>
        </header >
    )
};
// STYLING
const headerStyle = () => {
    return {
        background: '#2ed0bf',
        color: '#fff',
        textAlign: 'center',
        padding: '15px'
    }
}

const linkStyles = () => {
    return {
        color: '#fff',
        textDecoration: 'none'
    }
}

export default Header