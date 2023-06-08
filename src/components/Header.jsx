import { NavLink } from "react-router-dom";
import "./Header.css";
import { useAuth } from "../contexts/authContext";
import { useEffect } from "react";
import MobileDevs from '../pages/MobileDevs/MobileDevs'

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <header>
        <div className="titleFatherContainer">
          <img
            src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685704450/user-3296_rtszbc.png"
            alt="logo"
            className="logo"
          />
          <div className="titleContainer">
            <h1 className="titleHeader">USER PAGE</h1>
            <h1 className="titleHeaderBlack">USER PAGE</h1>
          </div>
        </div>

        <nav>
          {user == null && (
            <NavLink to="/login">
              <img
                src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685705523/login_ljn9fb.png"
                alt=""
                className="iconNav"
              />
            </NavLink>
          )}

          {user !== null && user?.check == true ? (
            <NavLink to="/dashboard">
              <img
                src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685705689/dashboard-statistics-5492_rnmxcl.png"
                alt=""
                className="iconNav iconDashBoard"
              />
            </NavLink>
          ) : null}

          <NavLink to="/mobileDevs">
            <button className="btn-mobileDev">
              MobileDevs
            </button>
          </NavLink>

          {user !== null && (
            <img
              src="https://res.cloudinary.com/dq186ej4c/image/upload/v1685706203/9e3c325bca17c2147d249237c5a0906b_qhqifa.png"
              alt=""
              className="iconNav iconLogout"
              onClick={() => logout()}
            />
          )}

          {user !== null && user?.check == true ? (
            <>
              <NavLink to="/profile">
                <img
                  className="profileCircle"
                  src={user.image}
                  alt={user.user}
                />
              </NavLink>
            </>
          ) : null}
        </nav>
      </header>
      <div className="whiteContainer"></div>
    </>
  );
};

export default Header;
