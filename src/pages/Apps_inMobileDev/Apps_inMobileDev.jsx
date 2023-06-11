import "./Apps_inMobileDev.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { mobileDev_getById } from "../../services/API_proyect/mobileDev.service";
import CardApp_inMobileDev from "../../components/CardApp_inMobileDev/CardApp_inMobileDev";
import { useMediaQuery } from "react-responsive";

const Apps_inMobileDev = () => {
  const [mobileDev, setMobileDev] = useState({ apps: [] });
  const { state } = useLocation();
  const { mobileDevId } = state;
  const isLargeScreen = useMediaQuery({ minWidth: 880 });

  useEffect(() => {
    mobileDev_getById(mobileDevId)
      .then((mobileDev) => setMobileDev(mobileDev))
      .catch((error) => {
        console.log("Error fetching data from back end ", error);

        return error;
      });
  }, []);

  return (
    <div className="outletContainer">
      {isLargeScreen ? <ShowTitleMsgBigScreen /> : <ShowTitleMsgSmallScreen />}
      {showApps(mobileDev.apps)}
    </div>
  );
};

const showApps = (apps) => (
  <div className="appsInMobileDev-Container">{apps.map(showApp)}</div>
);

const showApp = (app) => (
  <div key={app._id}>
    <CardApp_inMobileDev app={app} />
  </div>
);

const ShowTitleMsgBigScreen = () => (
  <h1>
    Enjoy all our awesome <u>Apps</u> included in our Brands!
  </h1>
);
const ShowTitleMsgSmallScreen = () => (
  <h1>
    <u>Apps</u> in our Brands!
  </h1>
);

export default Apps_inMobileDev;
