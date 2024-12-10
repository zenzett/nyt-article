import axios from "axios";

const API_KEY = "QU5ZK7EkUPKfKG9qFEpdEAKW6owym2xc";
const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

export interface Article {
  _id: string;
  headline: { main: string };
  byline: { original: string | null };
  pub_date: string;
  web_url: string;
}

export const searchArticles = async (query: string, page = 1): Promise<Article[]> => {
  try {
    const response = await axios.get(URL, {
      params: {
        q: query,
        page,
        "api-key": API_KEY,
      },
    });
    return response.data.response.docs;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
