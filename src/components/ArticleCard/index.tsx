import { FC } from "react";

import { Article } from "../../api/nyt";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
  const { headline, byline, pub_date, web_url } = article;

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="font-bold text-lg">{headline.main}</h2>
      <p className="text-sm text-gray-600">{byline?.original || "Unknown author"}</p>
      <p className="text-sm text-gray-500">{new Date(pub_date).toLocaleDateString()}</p>
      <a href={web_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        Read more
      </a>
    </div>
  );
};

export default ArticleCard;
