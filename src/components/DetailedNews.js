import React,{useContext} from 'react';
import {useParams} from "react-router-dom";
import {DataContext} from "./DataProvider";

const DetailedNews = () => {
    const {id} = useParams();
    const [news] = useContext(DataContext);
    const details = news.filter((news, index)=>{
        return news._id===id;
    })
    return (
        <div>
            {
                details.map(newsItem=>(
                    <div className="card" key={newsItem._id}>
                    <h3 title={newsItem.title}>
                   {newsItem.title}
                    </h3>
                    <img  src={newsItem.urlToImage} alt="" width="30px"></img>
                    <div>{newsItem.author} / {newsItem.publishedAt}</div>
                    <div className="box">
                    
                    <p>{newsItem.description}</p>
                    <p>{newsItem.content}</p>
                    <a href={newsItem.url}>Link to read - <span>{newsItem.url}</span></a>
                    </div>
                </div>
                ))
            }
        </div>
    );
};

export default DetailedNews;