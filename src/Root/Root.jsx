import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Login from "../NavComponent/Login/Login";
import Favorite from "../NavComponent/Favorite/Favorite";
import Home from "../Component/Home/Home";
import CardDetails from "../Component/PhoneCard/CardDetails";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: "ki?",
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