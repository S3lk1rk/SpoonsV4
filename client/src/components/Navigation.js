import React from "react";
import { Link, Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light navbar-dark bg-custom">
        
        <div className="container-fluid" >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/recipes" className="nav-link">
                Recipe Search
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shopping" className="nav-link">
                My Shopping List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/savedrecipe" className="nav-link">
                Saved Recipes
              </Link>
            </li>
           
          
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
