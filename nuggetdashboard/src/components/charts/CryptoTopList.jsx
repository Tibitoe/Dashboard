import { useEffect, useState } from "react";

const CryptoTopList = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
        );

        if (!response.ok) {
          throw new Error(`Fel: ${response.status}`);
        }

        const result = await response.json();
        setCryptos(result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-6 m-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">
        Top 10 Cryptocurrencies by Market Cap
      </h2>
      <ul className="space-y-4">
        {cryptos.map((crypto) => (
          <li
            key={crypto.id}
            className="flex justify-between items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
          >
            <div className="flex items-center space-x-4">
              <img
                src={crypto.image}
                alt={crypto.name}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                {crypto.name}
              </span>
            </div>
            <span className="text-xl text-gray-900 dark:text-gray-200">
              ${crypto.current_price.toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoTopList;
