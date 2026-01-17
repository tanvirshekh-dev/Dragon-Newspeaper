import { MoveLeft } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news);
    
    return (
        <div className='p-4 shadow-md space-y-5 mt-5 pb-8'>
            <img className='w-full h-[400px] object-cover rounded-md' src={news.image_url} alt="" />
            <h2 className='font-bold text-2xl'>{news.title}</h2>
            <p className='text-gray-500 text-base'>{news.details}</p>
            <Link className='btn btn-secondary cursor-pointer' to={`/category/${news.category_id}`}><MoveLeft /> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;