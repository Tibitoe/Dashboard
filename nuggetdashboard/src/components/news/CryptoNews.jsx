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
        const filteredNews = response.data.articles.filter(
          (item) => item.urlToImage
        );
        setNews(filteredNews);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  if (loading)
    return (
      <p className="text-gray-900 dark:text-gray-200 text-center text-3xl">
        Loading news...
      </p>
    );
  if (error)
    return (
      <p className="text-gray-900 dark:text-gray-200 text-center text-3xl">
        Error loading news: {error}
      </p>
    );

  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-6 sm:m-6 rounded-lg shadow-lg max-w-2xl">
      <h2 className="text-2xl font-bold text-gray-900 text-center dark:text-gray-200 mb-4">
        Latest Crypto News
      </h2>
      <ul className="space-y-6">
        {news.map((item, index) => (
          <li
            key={index}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
            tabIndex="0"
          >
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              tabIndex="-1"
            >
              <img
                src={item.urlToImage}
                alt={item.title}
                className="w-full h-64 md:h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200 hover:underline">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {item.description}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoNews;
