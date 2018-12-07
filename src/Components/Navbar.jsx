import React, { Component } from 'react';
import '../styles/navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className = "navbar">
                <a href = "/" className = "navlink">Home</a>
                <a href = "/user" className = "navlink">Dashbaord</a>
                <a href = "/lists" className = "navlink">Lists</a>
            </div>
        );
    }
}

export default Navbar;