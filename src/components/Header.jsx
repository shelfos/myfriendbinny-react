import React from 'react';
import logo from '../assets/mfb1.png';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>MyFriendBinny</h1>
        </header>
    )
}

export default Header;