// import ToggleButton from "../Toggle/Toggle"; // Hay que hacerla: AQUÍ
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
        {/* <ToggleButton appId={app._id} /> // ---------------------------> Pendiente AITOR   */}
        <button
          onClick={() =>
            navigate(pathById, {
              state: { appId: app._id, color: "blue" },
            })
          }
        >
          Show Mobile!
        </button>
      </div>
    </div>
  );
};

export default CardApp;
