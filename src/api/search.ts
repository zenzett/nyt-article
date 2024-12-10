import axios from "axios";

// const API_KEY = process.env.NYT_API_KEY;
const API_KEY = "QU5ZK7EkUPKfKG9qFEpdEAKW6owym2xc";
const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

const searchArticles = async (query: string) => {
  if (!API_KEY) {
    throw new Error("API key is missing");
  }

  const response = await axios.get(URL, {
    params: {
      q: query,
      "api-key": API_KEY,
    },
  });

  return response.data.response.docs.map((doc: any) => ({
    title: doc.headline.main,
    author: doc.byline?.original || "Unknown Author",
    published_date: doc.pub_date,
    url: doc.web_url,
  }));
};

export default searchArticles;
