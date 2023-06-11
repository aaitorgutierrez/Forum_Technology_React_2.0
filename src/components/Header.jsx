import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
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

  const [ancho, setAncho] = useState(window.innerWidth);

  const handleResize = () => {
    setAncho(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {}, [ancho]);

  return (
    <>
      <header>
        <div className="titleFatherContainer">
          <TbPlant2 size={30} />
          <NavLink to="/dashboard">
            <h3 className="titleWeb">Digital Nexus</h3>
          </NavLink>
        </div>
        <nav className="navHeader" ref={navRef}>
          <div className="navButton">
            {user && user?.check === true && (
              <>
                <NavLink to="/dashboard">
                  <button className="buttonNav">Home</button>
                </NavLink>
                <NavLink to="/mobileDevs">
                  <button className="buttonNav">Brands</button>
                </NavLink>
                <NavLink to="/apps">
                  <button className="buttonNav">Apps</button>
                </NavLink>
                <NavLink to="/favorites">
                  <button className="buttonNav">favorites</button>
                </NavLink>
              </>
            )}
            {user && (
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
                    <NavLink to="/profile" className="ProfileNav">
                      Profile
                    </NavLink>
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
        {ancho < 600 && (
          <>
            <button className="nav-btn" onClick={showNavbar}>
              <FaBars />
            </button>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
