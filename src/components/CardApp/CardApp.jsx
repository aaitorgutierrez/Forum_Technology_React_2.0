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
      {/* <p> {app.appName}</p> */}
      <p> {app.category}</p>
      <p> {app.codeLanguages}</p>
      <p> {app.appSize} Mb</p>
      <h5> {app.description}</h5>
      <div className="button-Holder">
        <ToggleButtonApp appId={app._id} />
        <button
          className="button-App"
          onClick={() =>
            navigate(pathById, {
              state: { appId: app._id, color: "blue" },
            })
          }
        >
          Show Mobiles
        </button>
      </div>
    </div>
  );
};

export default CardApp;
