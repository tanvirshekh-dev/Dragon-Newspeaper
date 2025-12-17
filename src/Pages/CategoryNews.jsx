import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const { id } = useParams()
    const data = useLoaderData()
    // console.log(data);
    
    useEffect(() => {
        const filteredNews = data.filter(news => news.category_id == id)
        console.log(filteredNews);
        
    },[data, id])
    return (
        <div>
            CategoryNews - {id}
        </div>
    );
};

export default CategoryNews;