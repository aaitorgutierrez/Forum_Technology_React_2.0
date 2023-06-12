import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { changePasswordUser } from "../../services/API_proyect/user.service";
import useChangePasswordError from "../../hooks/useChangePasswordError";
import { useAuth } from "../../contexts/authContext";
import { Navigate } from "react-router-dom";
import "./ChangePassword2.css";

const ChangePassword2 = () => {
  const { setUser } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [changePasswordOk, setChangePasswordOk] = useState(false);

  //! --------- funcion que controla el formulario-----------------------
  const formSubmit = async (formData) => {
    const { password, newPassword, confirmPassword } = formData;
    if (newPassword == confirmPassword) {
      //   console.log("ChangePassword -> formSubmit: ", "kaixo swal");

      Swal.fire({
        title: "You really wanna reset your password?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "rgb(73, 193, 162)",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        position: "center",
      }).then(async (result) => {
        if (result.isConfirmed) {
          setSend(true);
          setRes(await changePasswordUser({ password, newPassword }));
          setSend(false);
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Looks like the passwords aren’t the same. Give it another go!",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };

  //! --------------- USEEFFECT  que controla la gestion de errores ----------------------
  useEffect(() => {
    // console.log(res);
    useChangePasswordError(res, setChangePasswordOk);
  }, [res]);

  //! ---------------- LOS CONDICIONALES CON LOS ESTADOS DE NAVEGACION --------------------

  if (changePasswordOk) {
    //! no utilizamos el logout aunque no pasaria nada. No lo utlizo porque da warning
    //logout();
    setUser(null);
    localStorage.removeItem("user");
    return <Navigate to="/login" />;
  }
  return (
    <>
      <div className="form-wrap">
        <p className="changePassword-text-new-password">Your new password</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="password_container form-group">
            <label htmlFor="custom-input" className="custom-placeholder">
              current password
            </label>
            <input
              className="input_user"
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              {...register("password", { required: true })}
            />
          </div>
          <div className="newPassword_container form-group">
            <label htmlFor="custom-input" className="custom-placeholder">
              new password
            </label>
            <input
              className="input_user"
              type="password"
              id="newPassword"
              name="newPassword"
              autoComplete="false"
              {...register("newPassword", { required: true })}
            />
          </div>
          <div className="confirmPassword_container form-group">
            <label htmlFor="custom-input" className="custom-placeholder">
              confirm new password
            </label>
            <input
              className="input_user"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              autoComplete="false"
              {...register("confirmPassword", { required: true })}
            />
          </div>
          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              //style={{ background: send ? "#49c1a388" : "#49c1a2" }}
              style={{
                background: send
                  ? "#008000"
                  : "var(--background-color-button-login)",
              }}
            >
              CHANGE PASSWORD
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChangePassword2;
