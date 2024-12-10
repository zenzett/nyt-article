import React from "react";

import ArticleCard from "../ArticleCard";

interface ArticleListProps {
  articles: Array<{
    title: string;
    author?: string;
    published_date: string;
    url: string;
  }>;
}

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return <div className="article-list">{articles.length > 0 ? articles.map((article, index) => <ArticleCard key={index} title={article.title} author={article.author} published_date={article.published_date} url={article.url} />) : <p>No articles found. Try a different search term.</p>}</div>;
};

export default ArticleList;
