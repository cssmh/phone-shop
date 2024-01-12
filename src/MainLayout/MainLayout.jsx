import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import { useEffect } from "react";
import { FallingLines } from "react-loader-spinner";

const MainLayout = () => {
  // Dynamic title
  const loc = useLocation();
  useEffect(() => {
    if (loc.pathname === "/") {
      document.title = "Phone -Home";
    } else if (loc.state) {
      document.title = `${loc.state}`;
    } else {
      document.title = `Phone ${loc.pathname.replace("/", "-")}`;
    }
  }, [loc]);
  // Dynamic title emd

  const navigationForSpinner = useNavigation();

  return (
    <div>
      <Header></Header>
      <div className="min-h-[78dvh]">
        {navigationForSpinner.state === "loading" ? (
          <div className="flex justify-center">
            <FallingLines
              color="#4fa94d"
              width="100"
              visible={true}
              ariaLabel="falling-circles-loading"
            />
          </div>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
