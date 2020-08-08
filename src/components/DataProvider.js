import React, {createContext, useState, useEffect} from 'react';
import axios from "axios";
export const DataContext = createContext();

export const DataProvider = (props) => {
    const [news, setNews] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const res = await axios.get("http://localhost:5000/api/v1/news");
            setNews(res.data.articles);
        }
        fetchData();
    },[])
    return (
        <DataContext.Provider value={[news, setNews]}>
         {props.children}
        </DataContext.Provider>
    );
};