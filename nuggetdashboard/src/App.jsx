import { RouterProvider } from "react-router-dom";
import route from "./routing/Routing";
import "./index.css";

function App() {
  return <RouterProvider router={route} />;
}

export default App;
