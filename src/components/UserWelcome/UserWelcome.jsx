import { TbPlant2 } from "react-icons/tb";
import { useAuth } from "../../contexts/authContext";
import { useMediaQuery } from 'react-responsive';

import "./UserWelcome.css";

const UserWelcome = () => {
  const { user } = useAuth();
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  return (
    <div className="userWelcome-container">

      <TbPlant2 size={isLargeScreen ? 160 : 80} />

      <p className="userWelcome-welcome-text">
        Hi {user.user}! Thanks for stopping by.
      </p>
      <div className="userWelcome-logo">
        <TbPlant2 size={isLargeScreen ? 50 : 30} />
        <h3 className="userWelcome-Digital-Nexus-text">Digital Nexus</h3>
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
