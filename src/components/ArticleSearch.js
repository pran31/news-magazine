import React,{useContext,useEffect,useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import { DataContext } from './DataProvider';

const ArticleSearch = () => {

    const [news] = useContext(DataContext);
    const [datasearch, setdatasearch] = useState([]);
    const [Contains, setContains] = useState("");
    const query = "q="+Contains;
    const loadresults = (event) => {
        event.preventDefault();
        setContains(event.target.value);
    } 

    useEffect(()=>{
        //Local host can be replaced -- once we deploy to the shared system
        const fetchData = async () => {
            const res = await axios.get("http://localhost:5000/api/v1/news?"+query);
            setdatasearch(res.data.articles);
        }
        if(query){
            fetchData();
        }else{
            setdatasearch(news);
        }    
    },[news,query])
    return (
        
        <div>
        <div className="logo">
        <h1>Search Filter</h1>
    </div>
    <input type="text" name="Contains" value={Contains} onChange={loadresults}/>
    <div ><hr/><hr/></div>
    <div ><h1>Search Results:</h1></div>
    <div>{
        datasearch.map(newsItem =>(
            <div className="card" key={newsItem._id}>
            <div className="box">
            <h3 title={newsItem.title}>
            <Link to={`/${newsItem._id}`}>{newsItem.title}</Link>
            </h3>
            <p>{newsItem.description}</p>
            </div>
        </div>
        ))
    }</div>
    </div>
)};

export default ArticleSearch;