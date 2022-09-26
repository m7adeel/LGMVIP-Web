import React from 'react';
import './styles.css';

export default function Navbar(props) {
    
    return (
        <nav className='navigation-bar'>
            <div className='title-box'>
                <div className='title'>User Data</div>
            </div>
            <div className='button-container'>
                <button className='fetch-data-button' onClick={props.handleClick}>Fetch User Data</button>
            </div>
        </nav>
    )
}
