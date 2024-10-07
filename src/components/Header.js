import React, { useRef, useState } from 'react';
import "../styles/header.scss";
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import nauan from "../assets/images/nauan.jpg";
import phache from "../assets/images/phache.jpg";

const Header = ({setLoot, handleSort}) => {
    const router = useNavigate();
    const ref = useRef("");
    const [menu, setMenu] = useState(false);

    const handleReset = () => {
        if(ref.current.value){
            ref.current.value = "";
            ref.current.focus();
        }
        handleSort("");
        setLoot(ref.current.value)
    }
    return (
        <div className='Header'>
            <div className='Header-Input'>
                <input type='text' placeholder='Tìm kiếm công thức?' ref={ref} onChange={() => setLoot(ref.current.value)}/>
            </div>
            <div className='Header-Sort'>
                <span style={{width: "50px"}} onClick={() => handleReset()}><i className="fa-solid fa-rotate"></i></span>
                <span style={{border: "1px solid black", width: "120px"}} onClick={() => setMenu(true)}>Danh Mục</span>
                <span style={{width: "50px"}} onClick={() => router("/")}><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
            </div>
            <div className='Header-Box' style={{display: menu ? "flex" : "none"}} onClick={() => setMenu(false)}>
                <div className='Header-delta'>
                    <div className='Header-delta_item' onClick={() => handleSort("&menu=phache")}>
                        <LazyLoadImage width={150} height={100} src={phache} alt="Pha chế" />
                        <h3>Pha chế</h3>
                    </div>
                    <div className='Header-delta_list'>
                        <div className='Header-delta_list-box'>
                            <button onClick={() => handleSort("&menu=phache&list_like=Trà")}>Trà</button>
                            <button onClick={() => handleSort("&menu=phache&list_like=Nước-trái-cây")}>Nước Trái Cây</button>
                            <button onClick={() => handleSort("&menu=phache&list_like=Cà-phê")}>Cà Phê</button>
                            <button onClick={() => handleSort("&menu=phache&list_like=Thuốc")}>Thuốc</button>
                            <button onClick={() => handleSort("&menu=phache&list_like=Rượu")}>Rượu</button>
                            <button onClick={() => handleSort("&menu=phache&list_like=Bia")}>Bia</button>
                            <button onClick={() => handleSort("&menu=phache&list_like=Cocktail")}>Cocktail</button>
                            <button onClick={() => handleSort("&menu=phache&list_like=Gas")}>Gas</button>
                            <button onClick={() => handleSort("&menu=phache&list_like=Sữa")}>Sữa</button>
                        </div>
                    </div>
                    <div className='Header-delta_item' onClick={() => handleSort("&menu=nauan")}>
                        <LazyLoadImage width={150} height={100} src={nauan} alt="Nấu Ăn" />
                        <h3>Nấu Ăn</h3>
                    </div>
                    <div className='Header-delta_list'>
                        <div className='Header-delta_list-box'>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Nướng")}>Nướng</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Hấp")}>Hấp</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Ngọt")}>Ngọt</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Xào")}>Xào</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Chiên")}>Chiên</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Súp")}>Súp</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Kho")}>Kho</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Nước-chấm")}>Nước Chấm</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Muối")}>Muối</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
