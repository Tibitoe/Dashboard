import { useSelector } from "react-redux";

const CryptoTopList = () => {
  const { data, loading, error } = useSelector((state) => state.crypto);

  if (loading)
    return (
      <p className="text-gray-900 dark:text-gray-200 text-center text-3xl">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="text-gray-900 dark:text-gray-200 text-center text-3xl">
        Error loading toplist: {error}
      </p>
    );

  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-6 mb-6 sm:rounded-lg shadow-lg max-w-2xl m-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">
        Top 10 Cryptocurrencies by Market Cap
      </h2>
      <ul className="space-y-4">
        {data.map((crypto) => (
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
