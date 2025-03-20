import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BitcoinPriceChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365&interval=daily"
        );

        if (!response.ok) {
          throw new Error(`Fel: ${response.status}`);
        }

        const result = await response.json();

        const formattedData = result.prices.map((entry) => ({
          date: new Date(entry[0]).toLocaleDateString(),
          price: parseFloat(entry[1].toFixed(1)),
        }));

        setData(formattedData);
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
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 mb-4">
        Bitcoin Price History (Last 365 Days)
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis dataKey="date" tick={{ fill: "#888" }} />
          <YAxis
            domain={["auto", "auto"]}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            tick={{ fill: "#888" }}
          />
          <Tooltip formatter={(value) => [`$${value.toFixed(2)}`, "Price"]} />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#f7931a"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BitcoinPriceChart;
