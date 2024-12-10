import { useState } from "react";

import searchArticles from "../../api/search";
import ArticleList from "../../components/ArticleList";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoadingComponent from "../../components/Loading";
import SearchBar from "../../components/SearchBar";

const Home = () => {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    setLoading(true);
    try {
      const results = await searchArticles(query);
      setArticles(results);
    } catch (error) {
      console.error("Error fetching articles:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <Header />
      <SearchBar onSearch={handleSearch} />
      {loading ? <LoadingComponent message="Loading articles..." /> : <ArticleList articles={articles} />}
      <Footer />
    </div>
  );
};

export default Home;
