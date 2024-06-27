import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/Home/propertyDetails";
import NewsDetails from "./pages/Home/newsDatils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/proptype_card",
    element: <PropertyDetails />,
  },
  {
    path: "/news_deatils",
    element: <NewsDetails />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
