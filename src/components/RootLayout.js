import { Outlet } from "react-router-dom";
import MainNav from "./nav/MainNav";

const RootLayout = () => {
  return (
    <div className="site-wrap">
      <MainNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
