import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";
import JobPost from "../components/pages/JobPost/JobPost";

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
        },
        {
          path : 'register', element : <Register></Register>
        },
        {
          path : 'job-post', element : <JobPost></JobPost>
        }
      ]
      
    },
  ]);