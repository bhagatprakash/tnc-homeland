import "./App.css";
import Header from "./components/header";
// import Footer from "./components/footer";

// react router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
