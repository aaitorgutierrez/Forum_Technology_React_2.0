import { TbPlant2 } from "react-icons/tb";
import { useAuth } from "../../contexts/authContext";

import './UserWelcome.css'

const UserWelcome = () => {
    const { user } = useAuth();

    return (
        <div className="userWelcome-container">
            <p className="userWelcome-welcome-text">
                Hi {user.user}! Thanks for stopping by.
            </p>
            <div className="userWelcome-logo">
                <TbPlant2 size={30} />
                <h3 className="titleWeb">Digital Nexus</h3>
            </div>
            <p className="userWelcome-info-text">
                Our site is full of great resources and information, so feel free to explore.
            </p>
        </div>
    )
}

export default UserWelcome