import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children : [
        {
          path : '/',
          element : <Home></Home>
        },
        {
          path : 'login',element : <Login></Login>
        }
      ]
      
    },
  ]);