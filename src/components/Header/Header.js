import React, { Component } from 'react'
import logo from '../../images/logo.png';
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} alt='eaa-jhon'></img>
                <nav>
                    <a href="/shop">Shop</a>
                    <a href="/review">Review</a>
                    <a href="/manage">Manage inventory</a>
                </nav>
            </div>
        )
    }
}

export default Header
