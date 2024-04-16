/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem"; // Assuming NewsItem component is in the same directory

function NewsBoard({category}) {
    const [articles, setArticles] = useState([]);
    
    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=0465a66042614f6fa602eb7de465ebca`;
        fetch(url)
            .then(response => response.json())
            .then(data => setArticles(data.articles));
    }, [category]);

    return (
        <div>
            <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
            {articles.map((news, index) => (
                <NewsItem
                    key={index}
                    title={news.title}
                    description={news.description}
                    src={news.urlToImage} // Corrected src prop to represent the image URL
                    url={news.url}
                />
            ))}
        </div>
    );
}

export default NewsBoard;
