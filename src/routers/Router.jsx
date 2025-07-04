
import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import Regester from "../pages/register/Regester";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/jobdetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/jobApply/JobApply";
import MyApplications from "../pages/myApplications/MyApplications";


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout> ,
    errorElement: <h2 className="text-5xl text-center text-red-600 font-bold">ERROR!!!!</h2>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
         path:'/jobs/:id',
         element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute> ,
         loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:'/jobApply/:id',
          element:<PrivateRoute><JobApply></JobApply></PrivateRoute> , 
        },
        {
          path:'/myApplication',
          element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>
        },
        {
            path:'/register',
            element:<Regester></Regester>
        },
        {
          path:'/singIn',
          element:<SignIn></SignIn>
        }
    ]
  },
]);

export default router;