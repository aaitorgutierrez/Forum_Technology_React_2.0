import ToggleButton from "../Toggle/Toggle";
import "./CardMobileDev.css";
import { useNavigate } from "react-router-dom";

export const CardMobileDev = ({ mobileDev }) => {
  const navigate = useNavigate();
  const pathById = `/mobileDev/apps`;

  console.log("mobileDev: ", mobileDev);
  return (
    <div className="mobileDev-Info">
      {/* <p>{mobileDev.brand}</p> */}
      <img src={mobileDev.image} alt={`mobileDev's ${mobileDev.brand} pic`} />
      <div className="mobileDev-Info-tabla">
        <div className="mobileDev-Info-tabla-p">
          <p>
            {" "}
            OS <div className="mobileDev-Info-tabla-OS">{mobileDev.OS}</div>
          </p>
          <p>
            {" "}
            VersionOS
            <div className="mobileDev-Info-tabla-versionOS">
              {mobileDev.versionOS}
            </div>
          </p>
          <p>
            {" "}
            Language
            <div className="mobileDev-Info-tabla-language">
              {mobileDev.language}
            </div>
          </p>
        </div>
      </div>
      <h5>{mobileDev.description}</h5>
      <div className="button-Holder">
        <ToggleButton className="ToggleMobileDev" mobileDevId={mobileDev._id} />
        <button
          className="button-MobileDev"
          onClick={() =>
            navigate(pathById, {
              state: { mobileDevId: mobileDev._id, color: "blue" },
            })
          }
        >
          Show Apps
        </button>
      </div>
    </div>
  );
};

export default CardMobileDev;
