import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBitcoinHistory } from "../../store/cryptoSlice";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const BitcoinPriceChart = () => {
  const dispatch = useDispatch();
  const { bitcoinHistory, loading, error } = useSelector(
    (state) => state.crypto
  );

  const [selectedPeriod, setSelectedPeriod] = useState("365");
  useEffect(() => {
    dispatch(fetchBitcoinHistory(selectedPeriod));
  }, [dispatch, selectedPeriod]);

  if (loading)
    return <p className="text-gray-900 dark:text-gray-200">Loading...</p>;
  if (error)
    return (
      <p className="text-gray-900 dark:text-gray-200">
        Error loading chart: {error}
      </p>
    );

  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-6 sm:m-6 sm:rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
          Bitcoin Price History
        </h2>
        <select
          value={selectedPeriod}
          onChange={(e) => setSelectedPeriod(e.target.value)}
          className="p-2 rounded bg-white dark:bg-gray-700 border dark:border-gray-600 text-gray-900 dark:text-gray-200"
        >
          <option value="1">24 Hours</option>
          <option value="30">1 Month</option>
          <option value="365">1 Year</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={bitcoinHistory}>
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
