import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = ({ loggedIn,setLoggedIn}) => {
    const navigate = useNavigate();
  const logOut = () => {
    setLoggedIn(false);
    navigate("/");
    };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            m-Stock App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Companies
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/watchlist">
                  Watch List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="compare">
                  Compare
                </Link>
              </li>
              <li className="nav-item">
                {loggedIn ? <button className="btn btn-success btn-sm" onClick={logOut}>Logout</button> :<Link className="nav-link" to="/login">
                  Login
                </Link>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
