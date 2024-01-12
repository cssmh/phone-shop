import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Login from "../NavComponent/Login/Login";
import Favorite from "../NavComponent/Favorite/Favorite";
import Home from "../Component/Home/Home";
import CardDetails from "../Component/PhoneCard/CardDetails";
import Error from "../Component/Error/Error";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
        {
            path: "/",
            loader: ()=> fetch("/phones.json"),
            element: <Home></Home>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/favorite",
            loader: ()=> fetch("/phones.json"),
            element: <Favorite></Favorite>
        },
        {
            path: "/phone/:phoneId",
            loader: ()=> fetch("/phones.json"),
            element: <CardDetails></CardDetails>
        },
    ]
  },
]);

export default Root;