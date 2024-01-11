import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";

const Root = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: "ki?",
    children: [
        {

        }
    ]
  },
]);

export default Root;