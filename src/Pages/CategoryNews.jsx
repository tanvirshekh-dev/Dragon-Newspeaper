import React, { useMemo } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const categoryNews = useMemo(() => {
    if (id === "0") {
      return data;
    } else if (id === "1") {
      return data.filter((news) => news.others.is_today_pick === true);
    } else {
      return data.filter((news) => news.category_id === id);
    }
  }, [id, data]);

  return (
    <div>
      <h2>Total {categoryNews.length} News Found</h2>
      <div>
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;