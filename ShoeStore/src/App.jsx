/* eslint-disable no-unused-vars */
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import {
  RouterProvider,
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router";
import Shop from "./components/shop/Shop";
import Product from "./components/product/Product";
import Update from "./components/update/Update";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Shop /> },
  { path: "/product", element: <Product /> },
  { path: "/update", element: <Update /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
