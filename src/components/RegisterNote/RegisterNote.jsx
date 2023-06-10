import { useNavigate } from "react-router-dom";
import { TbPlant2 } from "react-icons/tb";
import './RegisterNote.css'

const RegisterNote = () => {
    const navigate = useNavigate();

    return (
        <div className="registerNote-container">
            <p className="registerNote-welcome-text">
                Welcome to our Forum of technology!
            </p>
            <div className="registerNote-logo">
                <TbPlant2 size={30} />
                <h3 className="titleWeb">Digital Nexus</h3>
            </div>
            <p className="registerNote-please-text">
                Please, register to access the page!
            </p>
            <button className="registerNote-login-btn" onClick={() => navigate("/login")}>
                Go to LOGIN
            </button>
        </div>
    )
}

export default RegisterNote