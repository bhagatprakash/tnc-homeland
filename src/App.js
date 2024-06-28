import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";

// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/Home/propertyDetails";
import NewsDetails from "./pages/Home/newsDatils";
import { useEffect } from "react";

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
  useEffect(() => {
    let htmlClasses = document.querySelector("html").classList;
    if (localStorage.theme === "dark") {
      htmlClasses.add("dark");
    }
  }, []);
  return (
    <div className="App dark:bg-gulf-blue">
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
