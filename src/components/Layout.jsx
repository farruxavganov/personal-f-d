import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-tansaction">Blogs</Link>
          </li>
          <li>
            <Link to="/dashboard">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;