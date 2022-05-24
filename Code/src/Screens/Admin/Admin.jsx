import React from "react";
import { Link } from "react-router-dom";

//Admin Components
import PropertyList from "./components/PropertyList";
import "./admin.css";

const Admin = () => {
  return (
    <>
      <div className="nav_admin">
        <div className="nav_wrap">
          <h5>ADMIN MENU</h5>
          <ul>
            <li>
              <Link className="admin_link" to="/properti">
                Back
              </Link>
              <Link className="admin_link" to="create">
                Create
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <PropertyList />
      </div>
    </>
  );
};

export default Admin;
