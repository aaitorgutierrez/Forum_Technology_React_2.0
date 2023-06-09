import { useEffect, useState } from "react";
import "./Profile.css";
import FormProfile from "../components/FormProfile";
import ChangePassword from "../components/ChangePassword";
import useDeleteUser from "../hooks/useDeleteUser";
import { useAuth } from "../contexts/authContext";

const Profile = () => {
  const [changeRender, setChangeRender] = useState(true);
  const { user, setUser } = useAuth();

  return (
    <>
      <div className="containerNavProfile">
        <button className="iconNav" onClick={() => setChangeRender(false)}>
          Change password
        </button>
        <button
          className="iconNav iconChangeProfile"
          onClick={() => setChangeRender(true)}
        >
          change data profile
        </button>
        <button
          className="iconNav iconDeleteUser"
          onClick={() => useDeleteUser(setUser)}
        >
          User delete
        </button>
      </div>
      <div className="fluidContainerProfile">
        {changeRender ? <FormProfile /> : <ChangePassword />}
      </div>
    </>
  );
};

export default Profile;
