import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen dark:bg-gray-900">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
