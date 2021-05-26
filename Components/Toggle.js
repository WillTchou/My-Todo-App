import React from 'react';
import { func, string } from 'prop-types';
import { ReactComponent as Moon } from './css/icon-moon.svg';
import { ReactComponent as Sun } from './css/icon-sun.svg';

const Toggle = ({theme,themeToggle}) => {
    return (
        <div>
            <div className="sun-or-moon" onClick={themeToggle}>
                {theme==='dark' &&<Sun/>}
                {theme==='light' &&<Moon/>}
            </div>
        </div>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}

export default Toggle;