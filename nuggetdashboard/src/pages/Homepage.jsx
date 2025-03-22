import HeroVideo from "../components/Herovideo/HeroVideo";
import CryptoNews from "../components/news/CryptoNews";

function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <HeroVideo />
      <CryptoNews />
    </div>
  );
}

export default HomePage;
