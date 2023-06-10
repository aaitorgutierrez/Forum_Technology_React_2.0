import { TbPlant2 } from "react-icons/tb";
import { useAuth } from "../../contexts/authContext";

import "./UserWelcome.css";

const UserWelcome = () => {
  const { user } = useAuth();

  return (
    <div className="userWelcome-container">
      <TbPlant2 className="LogoDashboard" size={160} />
      <p className="userWelcome-welcome-text">
        Hi {user.user}! Thanks for stopping by.
      </p>
      <div className="userWelcome-logo">
        <h3 className="titleWeb">Digital Nexus</h3>
      </div>
      <p className="userWelcome-info-text">
        Our site is full of great resources and information, so feel free to
        explore. Explore our site, full of valuable resources and information.
        Discover a world of knowledge and inspiration at your fingertips. Feel
        free to dive in and satisfy your curiosity.
      </p>
    </div>
  );
};

export default UserWelcome;
