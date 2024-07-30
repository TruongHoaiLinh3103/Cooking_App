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
                    <div className='Header-delta_item' onClick={() => handleSort("&menu=nauan")}>
                        <LazyLoadImage width={150} height={100} src={nauan} alt="Nấu Ăn" />
                        <h3>Nấu Ăn</h3>
                    </div>
                    <div className='Header-delta_list'>
                        <div className='Header-delta_list-box'>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Nướng")}>Món Ăn Nướng</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Hấp")}>Món Ăn Hấp</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Ngọt")}>Món Ăn Ngọt</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Xào")}>Món Ăn Xào</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Lẩu")}>Lẩu</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Chiên")}>Món Ăn Chiên</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Mì")}>Món Ăn Mì</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Súp")}>Món Ăn Súp</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Cháo")}>Cháo</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Kho")}>Món Ăn Kho</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Nước-chấm")}>Nước Chấm</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Chay")}>Món Ăn Chay</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Muối")}>Món Muối</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Chả")}>Nem Chả</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Vặt")}>Món Ăn Vặt</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Ăn-sống")}>Món Ăn Sống</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Gia-vị")}>Gia Vị</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Xôi")}>Xôi</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Cơm-chiên")}>Cơm Chiên</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Mì-xào")}>Mì Xào</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Chưng")}>Món Chưng</button>
                            <button onClick={() => handleSort("&menu=nauan&list_like=Rim")}>Món Ăn Rim</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;