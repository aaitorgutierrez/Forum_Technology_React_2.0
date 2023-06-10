import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import "./Home.css";
import RegisterNote from "../components/RegisterNote/RegisterNote";

export const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="homeContainer">
      {user !== null ? (
        <h1 className="titleHome">Bienvenido {user.user}</h1>
      ) : <RegisterNote />
      }
    </div>
  );
};