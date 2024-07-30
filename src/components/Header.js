import React, { useRef, useState } from 'react';
import "../styles/header.scss";
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import nauan from "../assets/images/nauan.jpg";
import phache from "../assets/images/phache.jpg";

const Header = ({setLoot}) => {
    const router = useNavigate();
    const ref = useRef("");
    const [menu, setMenu] = useState(false);


    return (
        <div className='Header'>
            <div className='Header-Input'>
                <input type='text' placeholder='Tìm kiếm công thức?' ref={ref} onChange={() => setLoot(ref.current.value)}/>
            </div>
            <div className='Header-Sort'>
                <span style={{border: "1px solid black", width: "120px"}} onClick={() => setMenu(true)}>Danh Mục</span>
                <span style={{width: "50px"}} onClick={() => router("/")}><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
            </div>
            <div className='Header-Box' style={{display: menu ? "flex" : "none"}} onClick={() => setMenu(false)}>
                <div className='Header-delta'>
                    <div className='Header-delta_item'>
                        <LazyLoadImage width={150} height={100} src={phache} alt="Pha chế" />
                        <h3>Pha chế</h3>
                    </div>
                    <div className='Header-delta_item'>
                        <LazyLoadImage width={150} height={100} src={nauan} alt="Nấu Ăn" />
                        <h3>Nấu Ăn</h3>
                    </div>
                    <div className='Header-delta_list'>
                        <div className='Header-delta_list-box'>
                            <button>Món Ăn Nướng</button>
                            <button>Món Ăn Hấp</button>
                            <button>Món Ăn Ngọt</button>
                            <button>Món Ăn Xào</button>
                            <button>Lẩu</button>
                            <button>Món Ăn Chiên</button>
                            <button>Món Ăn Mì</button>
                            <button>Món Ăn Súp</button>
                            <button>Cháo</button>
                            <button>Món Ăn Kho</button>
                            <button>Nước Chấm</button>
                            <button>Món Ăn Chay</button>
                            <button>Món Muối</button>
                            <button>Nem Chả</button>
                            <button>Món Ăn Vặt</button>
                            <button>Món Ăn Sống</button>
                            <button>Gia Vị</button>
                            <button>Xôi</button>
                            <button>Cơm Chiên</button>
                            <button>Mì Xào</button>
                            <button>Món Chưng</button>
                            <button>Món Ăn Rim</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;