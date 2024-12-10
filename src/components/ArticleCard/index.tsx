import React from "react";

interface ArticleCardProps {
  title: string;
  author?: string;
  published_date: string;
  url: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, author, published_date, url }) => {
  return (
    <div className="article-card">
      <h2>{title}</h2>
      <p>Author: {author || "Unknown Author"}</p>
      <p>Published Date: {new Date(published_date).toLocaleDateString()}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read Article
      </a>
    </div>
  );
};

export default ArticleCard;
