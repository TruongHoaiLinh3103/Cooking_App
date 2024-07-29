import React, { useRef } from 'react';
import "../styles/header.scss";
import { useNavigate } from 'react-router-dom';

const Header = ({setLoot}) => {
    const router = useNavigate();
    const ref = useRef("");

    return (
        <div className='Header'>
            <div className='Header-Sort'>
                <input type='text' placeholder='Tìm kiếm công thức?' ref={ref} onChange={() => setLoot(ref.current.value)}/>
                <span style={{border: "1px solid black", marginLeft: "5px", width: "120px"}}>Danh Mục</span>
            </div>
            <span style={{padding: "10px", width: "50px"}} onClick={() => router("/")}><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
        </div>
    );
};

export default Header;