import "./MobileDevList_inApp.css";
import CardMobileDev_inApp from "../CardMobileDev_inApp/CardMobileDev_inApp";

const MobileDevList_inApp = ({ mobileDevList }) => {
  return <>{showMobileDevs(mobileDevList)}</>;
};

const showMobileDevs = (mobileDevList) => (
  <div className="MobileDevInAppList-container">
    {mobileDevList.map(showMobileDev)}
  </div>
);

const showMobileDev = (mobileDev) => (
  <div key={mobileDev._id}>
    <CardMobileDev_inApp mobileDev={mobileDev} />
  </div>
);

export default MobileDevList_inApp;
