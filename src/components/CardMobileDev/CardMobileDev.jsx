import ToggleButton from "../Toggle/Toggle";
import "./CardMobileDev.css";
import { useNavigate } from "react-router-dom";

export const CardMobileDev = ({ mobileDev }) => {
  const navigate = useNavigate();
  const pathById = `/mobileDev/apps`;

  console.log('mobileDev: ', mobileDev)
  return (
    <div className="mobileDev-Info">
      {/* <p>{mobileDev.brand}</p> */}
      <img src={mobileDev.image} alt={`mobileDev's ${mobileDev.brand} pic`} />
      <p>OS: {mobileDev.OS}</p>
      <p>versionOS: {mobileDev.versionOS}</p>
      <p>language: {mobileDev.language}</p>
      <p>{mobileDev.description}</p>
      <div className="button-Holder">
        <ToggleButton className="ToggleMobileDev" mobileDevId={mobileDev._id} />
        <button
          onClick={() =>
            navigate(pathById, {
              state: { mobileDevId: mobileDev._id, color: "blue" },
            })
          }
        >
          Show Apps!
        </button>
      </div>
    </div>
  );
};

export default CardMobileDev;
