/* eslint-disable no-unused-vars */
import "./App.css";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Product from "./components/product/Product";
import Update from "./components/update/Update";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";

const routerPath = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/shop", element: <Shop /> },
  { path: "/product/:id", element: <Product /> },
  { path: "/update/:id", element: <Update /> },
]);

function App() {
  return <RouterProvider router={routerPath} />;
}

export default App;
