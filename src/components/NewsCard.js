import React,{useContext} from 'react';
import { DataContext} from "./DataProvider";
import { Link } from 'react-router-dom';

const NewsCard = () => {
    const [news] = useContext(DataContext);
    return (
        <div className="news">
        {
            news.map(newsItem=>(
                <div className="card" key={newsItem._id}>
                    <Link to={`/${newsItem._id}`}> <img  src={newsItem.urlToImage} alt="" width="30px"></img></Link>
                    <div className="box">
                    <h3 title={newsItem.title}>
                    <Link to={`/${newsItem._id}`}>{newsItem.title}</Link>
                    </h3>
                    <p>{newsItem.description}</p>
                    <Link to={`/${newsItem._id}`}>Read More...</Link>
                    </div>
                </div>
            ))
        }
     
      </div>
    );
};

export default NewsCard;