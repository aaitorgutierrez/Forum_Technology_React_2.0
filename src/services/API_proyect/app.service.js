import { API } from "./service.config";

//!----------------------GET ALL------------------------
export const app_getAll = async () => {
  return API.get("/app/")
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });
};

//!----------------------GET by IB------------------------
export const app_getById = async (id) => {
  return API.get(`/app/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });
};
