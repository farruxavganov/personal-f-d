import { Outlet, Link } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="container">
          <Outlet />
      </div>
    </>
  )
};

export default Layout;