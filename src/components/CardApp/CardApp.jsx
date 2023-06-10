import ToggleButton from "../Toggle/Toggle";
import ToggleButtonApp from "../ToggleApp/ToggleApp";
import "./CardApp.css";
import { useNavigate } from "react-router-dom";

export const CardApp = ({ app }) => {
  const navigate = useNavigate();
  const pathById = `/app/mobileDevs`;

  return (
    <div className="app-Info">
      <img src={app.image} alt={`app's ${app.appName} pic`} />
      <p>appName: {app.appName}</p>
      <p>category: {app.category}</p>
      <p>codeLanguages: {app.codeLanguages}</p>
      <p>appSize: {app.appSize}</p>
      <p>description: {app.description}</p>
      <div className="button-Holder">
        <ToggleButtonApp appId={app._id} />
        <button
          onClick={() =>
            navigate(pathById, {
              state: { appId: app._id, color: "blue" },
            })
          }
        >
          Show Mobiles!
        </button>
      </div>
    </div>
  );
};

export default CardApp;
