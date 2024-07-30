import React from 'react';
import { useNavigate } from 'react-router-dom';
import ic from "../assets/images/notCooking.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const NotPage = () => {
    const router = useNavigate();
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "100%", "height": "100%", position: "relative", userSelect: "none"}}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", width: "100%", "height": "300px", padding: "10px"}}>
                <span style={{fontSize: "20px", textAlign: "center"}}><b>404 Not Found | </b>Không Tìm Thấy Trang Này!</span>
                <button style={{border: "1px solid black", outline: "none", backgroundColor: "#fff0", cursor: 'pointer', padding: "5px", marginTop: "5px", borderRadius: "10px", zIndex: 10}} onClick={() => router("/")}>Trở về trang chủ</button>
                <LazyLoadImage src={ic} alt="404!" width={200} height={200} style={{position: "absolute", top: "150px"}}/>
            </div>
        </div>
    );
};

export default NotPage;