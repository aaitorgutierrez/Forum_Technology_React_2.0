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
      <div className="app-Info-tabla">
        <div className="app-Info-tabla-p">
          <p>
            {" "}
            Category
            <div className="app-Info-tabla-Category">{app.category}</div>
          </p>
          <p>
            Languages
            <div className="mobileDev-Info-tabla-Languages">
              {app.codeLanguages}
            </div>
          </p>
          <p>
            Size
            <div className="app-Info-tabla-appSize">{app.appSize} Mbytes</div>
          </p>
        </div>
      </div>

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
