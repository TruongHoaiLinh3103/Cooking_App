import axios from 'axios';
import React from 'react';
import "../styles/cooking.scss";
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Cooking = () => {
    const params = useParams();
    const router = useNavigate();
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(`https://zfakecooking.vercel.app/cooking/${params.id}`).then((res) => {
            setData(res.data);
        })
    }, [params.id])
    const Data = Object.keys(data).length === 0
    return (
        <div className='Cooking'>
            {!Data && 
                <div className='Cooking-body'>
                    <h2 className='Cooking-body-title'>{data.name}</h2>
                    <p className='Cooking-body-review'>{data.review}</p>
                    <div className='Cooking-body_ct'>
                        <div className='-body_ct-img'>
                            <LazyLoadImage src={data.img} alt={data.name} />
                        </div>
                        <div className='-body_ct-cb'>
                            <div className='_ct-cb'>
                                <div className='_ct-cb-span'><b>Nguyên liệu: </b>{data.nguyenlieu}</div>
                                {data.luuy && <div className='_ct-cb-span'><b>Lưu ý: </b><p>{data.luuy}</p></div>}
                            </div>
                        </div>
                        <div className='-body_ct-thuchien'>
                            <div className='-body_ct'>
                                {data.thuchien.b1 && <div className='_ct-thuchien-span'><b>Bước 1: </b><p>{data.thuchien.b1}</p></div>}
                                {data.thuchien.b2 && <div className='_ct-thuchien-span'><b>Bước 2: </b><p>{data.thuchien.b2}</p></div>}
                                {data.thuchien.b3 && <div className='_ct-thuchien-span'><b>Bước 3: </b><p>{data.thuchien.b3}</p></div>}
                                {data.thuchien.b4 && <div className='_ct-thuchien-span'><b>Bước 4: </b><p>{data.thuchien.b4}</p></div>}
                                {data.thuchien.b5 && <div className='_ct-thuchien-span'><b>Bước 5: </b><p>{data.thuchien.b5}</p></div>}
                                {data.thuchien.b6 && <div className='_ct-thuchien-span'><b>Bước 6: </b><p>{data.thuchien.b6}</p></div>}
                                {data.thuchien.b7 && <div className='_ct-thuchien-span'><b>Bước 7: </b><p>{data.thuchien.b7}</p></div>}
                                {data.thuchien.b8 && <div className='_ct-thuchien-span'><b>Bước 8: </b><p>{data.thuchien.b8}</p></div>}
                                {data.thuchien.b9 && <div className='_ct-thuchien-span'><b>Bước 9: </b><p>{data.thuchien.b9}</p></div>}
                                {data.thuchien.b10 && <div className='_ct-thuchien-span'><b>Bước 10: </b><p>{data.thuchien.b10}</p></div>}
                                {data.thuchien.b11 && <div className='_ct-thuchien-span'><b>Bước 11: </b><p>{data.thuchien.b11}</p></div>}
                            </div>
                        </div>
                    </div>
                </div>
            }
            <span className='Cooking-pushHome' onClick={() => router("/")}><i className="fa-solid fa-house"></i></span>
        </div>
    );
};

export default Cooking;
