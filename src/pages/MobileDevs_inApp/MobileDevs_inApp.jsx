import "./MobileDevs_inApp.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { app_getById } from "../../services/API_proyect/app.service";
import CardMobileDev_inApp from "../../components/CardMobileDev_inApp/CardMobileDev_inApp";

const MobileDevs_inApp = () => {
  const [app, setApp] = useState({ mobileDevs: [] });
  const { state } = useLocation();
  const { appId } = state;

  useEffect(() => {
    app_getById(appId)
      .then((app) => setApp(app))
      .catch((error) => {
        console.log("Error fetching data from back end ", error);

        return error;
      });
  }, []);

  return showMobileDevs(app.mobileDevs);
};

const showMobileDevs = (mobileDevs) => (
  <div className="mobileDevsInApp-Container">
    {mobileDevs.map(showMobileDev)}
  </div>
);

const showMobileDev = (mobileDev) => (
  <div key={mobileDev._id}>
    <CardMobileDev_inApp mobileDev={mobileDev} />
  </div>
);

export default MobileDevs_inApp;
