import { updateToken } from "../../util/updateToken";
import { API } from "./service.config";

// ----------------- Get All MobileDevs from DB -----------
export const mobileDev_getAll = async () => {
  return API.get("/mobilesDev/")
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });
};

// ----------------- Get MobileDev by Id from DB -----------
export const mobileDev_getById = async (id) => {
  return API.get(`/mobilesDev/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });
};

export const mobilDev_Toggle = async (id, formData) => {
  return API.put(`/mobilesDev/favorite/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });
};
