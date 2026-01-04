import React from 'react';
import { FaRegBookmark, FaShareAlt, FaEye, FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const { id, title, author, thumbnail_url, details, rating, total_view } = news;

  // Function to render stars based on rating number
  const renderStars = (num) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className="text-orange-400">
        {i < num ? <FaStar /> : <FaRegStar />}
      </span>
    ));
  };

  return (
    <div className="card w-full max-w-2xl bg-base-100 shadow-lg border border-gray-100 rounded-md overflow-hidden mb-8 hover:scale-105 transition duration-300 ease-in-out">
      
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-gray-50">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author?.img} alt={author?.name} />
            </div>
          </div>
          <div>
            <h4 className="font-bold text-sm text-gray-800">{author?.name}</h4>
            <p className="text-xs text-gray-500">
              {author?.published_date ? new Date(author.published_date).toLocaleDateString() : "No Date"}
            </p>
          </div>
        </div>
        <div className="flex gap-3 text-gray-500">
          <button className="hover:text-primary transition-colors">
            <FaRegBookmark size={18} />
          </button>
          <button className="hover:text-primary transition-colors">
            <FaShareAlt size={18} />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h2 className="card-title text-xl font-bold mb-4 text-gray-800 leading-tight">
          {title}
        </h2>
        
        <figure className="mb-4">
          <img 
            src={thumbnail_url} 
            alt="News Thumbnail" 
            className="w-full h-auto object-cover rounded-sm"
          />
        </figure>

        <p className="text-gray-600 text-sm leading-relaxed mb-2">
          {details.length > 250 ? (
            <>
              {details.slice(0, 250)}... 
              <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold cursor-pointer ml-1 cursor-pointer">Read More</Link>
            </>
          ) : details}
        </p>
      </div>

      <hr className="mx-4 border-gray-200" />

      {/* Footer */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          <div className="flex text-lg">
            {renderStars(rating?.number)}
          </div>
          <span className="text-gray-500 font-medium ml-1">{rating?.number}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye size={18} />
          <span className="font-medium">{total_view}</span>
        </div>
      </div>

    </div>
  );
};

export default NewsCard;