import React, { useRef } from 'react';
import "../styles/header.scss";
import { useNavigate } from 'react-router-dom';

const Header = ({setLoot}) => {
    const router = useNavigate();
    const ref = useRef("");

    return (
        <div className='Header'>
            <div className='Header-Input'>
                <input type='text' placeholder='Tìm kiếm công thức?' ref={ref} onChange={() => setLoot(ref.current.value)}/>
            </div>
            <div className='Header-Sort'>
                <span style={{border: "1px solid black", width: "120px"}}>Danh Mục</span>
                <span style={{width: "50px"}} onClick={() => router("/")}><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
            </div>
        </div>
    );
};

export default Header;