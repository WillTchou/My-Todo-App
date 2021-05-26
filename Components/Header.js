import React from 'react';
import dark from './css/bg-desktop-dark.jpg';
import light from './css/bg-desktop-light.jpg';

const Header = ({theme}) => {
    return (
        <div className="Header">
            <header>
                {theme==='dark'? <img src={dark} className="dark-landscape" alt="dark"/>:
                <img src={light} className="light-landscape" alt="light"/>}            </header>
        </div>
    );
};

export default Header;