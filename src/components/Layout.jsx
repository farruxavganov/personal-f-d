import { Outlet, Link } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="container d-flex justify-content-center align-items-center"
        style={
            {
                minHeight: "80vh"
            }
        }
      >
          <Outlet />
      </div>
    </>
  )
};

export default Layout;