import { useNavigate } from "react-router-dom";
import { TbPlant2 } from "react-icons/tb";
import "./RegisterNote.css";

const RegisterNote = () => {
  const navigate = useNavigate();

  return (
    <div className="registerNote-container">
      <TbPlant2 className="LogoURL" size={160} />
      <p className="registerNote-welcome-text">
        Welcome to our Forum of technology!
      </p>
      <div className="registerNote-logo">
        <h3 className="titleWeb">Digital Nexus</h3>
      </div>
      <p className="registerNote-info-text">
        Our site is full of great resources and information, so feel free to
        explore. Explore our site, full of valuable resources and information.
        Discover a world of knowledge and inspiration at your fingertips. Feel
        free to dive in and satisfy your curiosity.
      </p>
      <p className="registerNote-please-text">
        Please, register to access the page!
      </p>
      <button
        className="registerNote-login-btn"
        onClick={() => navigate("/login")}
      >
        Go to LOGIN
      </button>
    </div>
  );
};

export default RegisterNote;
