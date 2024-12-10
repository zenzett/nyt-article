import { useState } from "react";

import { Article, searchArticles } from "../../api/nyt";
import ArticleCard from "../../components/ArticleCard";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (query: string) => {
    try {
      const results = await searchArticles(query);
      setArticles(results);
      setError(null);
    } catch (e) {
      setError("Failed to fetch articles. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <SearchBar onSearch={handleSearch} />
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
