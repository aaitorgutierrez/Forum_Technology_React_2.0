import { NavLink } from "react-router-dom";
import { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { TbPlant2 } from "react-icons/tb";
import "./Header.css";
import { useAuth } from "../contexts/authContext";

const Header = () => {
  const { user, logout } = useAuth();

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const handleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <>
      <header>
        <div className="titleFatherContainer">
          <TbPlant2 size={30} />
          <h3 className="titleWeb">Digital Nexus</h3>
        </div>

        <nav className="navHeader" ref={navRef}>
          {user == null && (
            <NavLink to="/login">
              <button className="iconNav">LogOut</button>
            </NavLink>
          )}
          <div className="navButton">
            {user !== null && user?.check == true ? (
              <NavLink to="/dashboard">
                <button className="buttonNav">Home</button>
              </NavLink>
            ) : null}

            <NavLink to="/mobileDevs">
              <button className="buttonNav">MobileDevs</button>
            </NavLink>

            <NavLink to="/apps">
              <button className="buttonNav">Apps</button>
            </NavLink>

            {user !== null && (
              <div className="dropdown">
                <button
                  className="iconNav iconProfile"
                  onClick={handleProfileDropdown}
                >
                  <img
                    className="profileCircle"
                    src={user.image}
                    alt={user.user}
                  />
                </button>
                {profileDropdownOpen && (
                  <div className="dropdown-content">
                    <NavLink to="/profile">Profile</NavLink>
                    <button className="buttonNavDown" onClick={() => logout()}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </div>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
};

export default Header;
