import BitcoinPriceChart from "../components/charts/BitcoinHistoryPriceChart";
import CryptoTopList from "../components/charts/CryptoTopList";

function Dashboard() {
  return (
    <div>
      <BitcoinPriceChart />
      <CryptoTopList />
    </div>
  );
}

export default Dashboard;
