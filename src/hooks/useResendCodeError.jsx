import Swal from "sweetalert2/dist/sweetalert2.all.js";

const useResendCodeError = (res) => {
  //! -------status: 500
  if (res?.response?.status == 500 || res?.response?.status == 404)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Internal Server Error!",
      showConfirmButton: false,
      timer: 1500,
    });

  //! -------status: 200
  if (res?.status == 200)
    Swal.fire({
      icon: "success",
      title: "We’ve sent an email with your code. Check it out!",
      showConfirmButton: false,
      timer: 1500,
    });
};

export default useResendCodeError;
