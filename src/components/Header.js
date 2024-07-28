import React from 'react';
import "../styles/header.scss";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const router = useNavigate();
    return (
        <div className='Header'>
            <div className='Header-Sort'>
                <span><i className="fa-solid fa-utensils"></i></span>
                <span><i className="fa-solid fa-glass-water-droplet"></i></span>
                <input type='text' placeholder='search?'/>
                <span><i className="fa-solid fa-filter"></i></span>
            </div>
            <span onClick={() => router("/")}>Thoát</span>
        </div>
    );
};

export default Header;