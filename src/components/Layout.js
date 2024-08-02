import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import Header from './Header';
import PageData from './PageData';
import { Pagination } from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { EDIT__PAGE, EDIT__SORT } from '../redux/reduccer/rootPage';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ic from "../assets/images/notCooking.png"

const Layout = () => {
    const sort = useSelector((state) => state.page.sort);
    const [data, setData] = useState([]);
    const page = useSelector((state) => state.page.page);
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");
    const [max, setMax] = useState();

    const handleChange = (event, value) => {
        dispatch(EDIT__PAGE(value));
    }; 

    const handleSort = useCallback((item) => {
        dispatch(EDIT__SORT(item));
        dispatch(EDIT__PAGE(1));
    },[]);

    const setLoot = useCallback((Children) => {
        setSearch(Children);
        dispatch(EDIT__PAGE(1));
    },[])

    const handleResetPage = () => {
        handleSort("");
        setLoot("");
    }

    useEffect(() => {
        if(search){
            axios.get(`https://zfakecooking.vercel.app/cooking?_page=${page}&_limit=18&q=${search}${sort}&_sort=id&_order=desc`).then((res) => {
                setData(res.data)
            })
        }else{
            axios.get(`https://zfakecooking.vercel.app/cooking?_page=${page}&_limit=18${sort}&_sort=id&_order=desc`).then((res) => {
                setData(res.data)
            })
        }
    },[page, search, sort])
    useLayoutEffect(() => {
        if(search){
            axios.get(`https://zfakecooking.vercel.app/cooking?q=${search}${sort}&_sort=id&_order=desc`).then((res) => {
                const number = res.data.length/18;
                setMax(Math.ceil(number));
            })
        }else{
            axios.get(`https://zfakecooking.vercel.app/cooking?${sort}&_sort=id&_order=desc`).then((res) => {
                const number = res.data.length/18;
                setMax(Math.ceil(number));
            });
        }
    },[sort,search])
    return (
        <div style={{width: "100%", height: "100%"}}>
            <Header setLoot={setLoot} handleSort={handleSort}/>
            {data.length === 0 ? 
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: "70px", flexDirection: "column"}}>
                    <h2 style={{fontWeight: 400, fontSize: "20px", textAlign: "center", margin: "0px 10px", position: "relative"}}>Không có công thức nào!</h2>
                    <LazyLoadImage src={ic} alt="404!" width={200} height={200} style={{position: "absolute", top: "30px"}}/>
                    <button onClick={() => handleResetPage()} style={{border: "1px solid black", outline: "none", backgroundColor: "#fff0", cursor: 'pointer', padding: "5px", marginTop: "5px", borderRadius: "10px", zIndex: 5}}>Làm mới</button>
                </div>
             :
                <>
                    <PageData data={data}/>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "70px"}}>
                        <Pagination count={max} page={page} variant="outlined" color="primary" onChange={handleChange} defaultPage={6} siblingCount={0}/>
                    </div>
                </>
            }
        </div>
    );
};

export default Layout;
