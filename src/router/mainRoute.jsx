import {   createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomeScreen from "../pages/HomeScreen";
import CarRent from "../pages/CarRent";
import Insight from "../pages/Insight";
import Reimburse from "../pages/Reimburse";
import Inbox from "../pages/Inbox";
import Calender from "../pages/Calender";
import Settings from "../pages/Settings";
import Help_Center from "../pages/Help_Center";

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
      },
      {
        path:"/insight",
        element:<Insight/>
      },
      {
        path:"/reimburse",
        element:<Reimburse/>
      },
      {
        path:"/inbox",
        element:<Inbox/>
      },
      {
        path:"/calender",
        element:<Calender/>
      },
      {
        path:"/settings",
        element:<Settings/>
      },
      {
        path:"/help-center",
        element:<Help_Center/>
      },
      {
        path:"/logout",
        element:<Reimburse/>
      }
    ]
  }
])