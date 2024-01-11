import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Login from "../NavComponent/Login/Login";
import Favorite from "../NavComponent/Favorite/Favorite";
import Home from "../Component/Home/Home";

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
    ]
  },
]);

export default Root;