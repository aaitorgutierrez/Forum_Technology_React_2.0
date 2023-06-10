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
      <p> {mobileDev.OS}</p>
      <p> {mobileDev.versionOS}</p>
      <p> {mobileDev.language}</p>
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
