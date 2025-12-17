import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Layout from "./Pages/Layout/Layout";

function App() {
  const route = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "portfolio", element: <Portfolio /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
