import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-7xl mx-auto min-h-[80dvh]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
