import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "54cc011c6eae46f39b774a601da80214";

const CryptoNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=${API_KEY}&pageSize=15`
        );
        setNews(response.data.articles);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading) return <p>Loading news...</p>;
  if (error) return <p>Error loading news: {error}</p>;

  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-6 m-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">
        Latest Crypto News
      </h2>
      <ul className="space-y-4">
        {news.map((item, index) => (
          <li
            key={index}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4"
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-gray-900 dark:text-gray-200"
            >
              {item.title}
            </a>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoNews;
