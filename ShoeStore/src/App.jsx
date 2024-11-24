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

const router = createBrowserRouter([
  { path: "/nav", element: <NavBar /> },
  { path: "/", element: <Home /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
