import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} alt='eaa-jhon'></img>
                <nav>
                    <Link to="/shop">Shop</Link>
                    <Link to="/review">Review</Link>
                    <Link to="/manage">Manage inventory</Link>
                </nav>
            </div>
        )
    }
}

export default Header
