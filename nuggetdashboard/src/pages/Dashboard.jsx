import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCryptoData } from "../store/cryptoSlice";
import BitcoinPriceChart from "../components/charts/BitcoinHistoryPriceChart";
import CryptoTopList from "../components/charts/CryptoTopList";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCryptoData());
  }, [dispatch]);

  return (
    <div>
      <BitcoinPriceChart />
      <CryptoTopList />
    </div>
  );
}

export default Dashboard;
