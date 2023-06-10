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
        <button className="btn-profile" onClick={() => setChangeRender(false)}>
          Password
        </button>
        <button className="btn-profile" onClick={() => setChangeRender(true)}>
          Profile
        </button>
        <button className="btn-profile" onClick={() => useDeleteUser(setUser)}>
          Delete
        </button>
      </div>
      <div className="fluidContainerProfile">
        {changeRender ? <FormProfile /> : <ChangePassword />}
      </div>
    </>
  );
};

export default Profile;
