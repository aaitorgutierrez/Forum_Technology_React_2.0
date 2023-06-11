import Swal from "sweetalert2";

const useChangePasswordError = (res, setChangePasswordOk) => {
  //!  --------- 200: {updateUser: true}
  if (res?.data?.updateUser?.toString() == "true") {
    setChangePasswordOk(() => true);
    Swal.fire({
      icon: "success",
      title: "Change password ok ✅",
      showConfirmButton: false,
      timer: 1500,
      position: 'center',
    });
  }

  //!  --------- 200: {updateUser: false}

  if (res?.data?.updateUser?.toString() == "false") {
    Swal.fire({
      icon: "error",
      title: "Internal server error",
      text: "Oops, let’s give it another shot!",
      showConfirmButton: false,
      timer: 2500,
    });
  }

  //! ---------- 404: {error.message} --> general
  if (
    !res?.response?.data?.includes("password dont match") &&
    res?.response?.status == 404
  )
    Swal.fire({
      icon: "error",
      title: "Internal server error",
      text: "Oops, let’s give it another shot!",
      showConfirmButton: false,
      timer: 3000,
    });

  //! ---------- 404: password dont match

  if (res?.response?.data?.includes("password dont match"))
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Uh-oh, the old password doesn’t match. Let’s try again!",
      showConfirmButton: false,
      timer: 3000,
    });

  //! ---------- 500: internal server error

  if (res?.response?.status == 500)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Internal Server Error!",
      showConfirmButton: false,
      timer: 1500,
    });
};

export default useChangePasswordError;
