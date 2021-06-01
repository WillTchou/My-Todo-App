import React from 'react';
import PropTypes from 'prop-types';
import './css/Footer.css'

const Footer = (props) => {

    const left=(taches)=>{
        let tachesLeft=taches.filter((tache)=>tache.completed===false);
        return tachesLeft.length;
    }
    
    const clearAll=()=>{
        props.completeAll();
    }

    return (
        <div className="Footer">
            <footer className="footer-taches">
                <div className="place">
                    <span>{left(props.taches)} items left</span>
                </div>
                <ul className="options">
                    <li><span id="all">All</span></li>
                    <li><span className="place">Active</span></li>
                    <li><span className="place">Completed</span></li>  
                </ul>
                <div className="clearAll">
                    <span className="place" onClick={()=>clearAll(props.taches)}>Clear Completed</span>
                </div>
            </footer>
        </div>
    );
};

Footer.propTypes={
    taches:PropTypes.array.isRequired,
    completeAll:PropTypes.func.isRequired
}

export default Footer;