import {   createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomeScreen from "../pages/HomeScreen";
import CarRent from "../pages/CarRent";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element:<HomeScreen/>,
      },
      {
        path: "/car-rent",
        element: <CarRent/>,
      }
    ]
  }
])