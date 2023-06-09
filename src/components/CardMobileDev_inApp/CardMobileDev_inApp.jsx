import "./CardMobileDev_inApp.css";

export const CardMobileDev = ({ mobileDev }) => (
  <div className="cardMobileDevInApp-Data">
    <img
      className="cardMobileDevInApp-img"
      src={mobileDev.image}
      alt={`mobileDev's ${mobileDev.brand} pic`}
    />
    {showMobileDevInfo(mobileDev)}
  </div>
);

const showMobileDevInfo = (mobileDev) => {
  return (
    <div className="cardMobileDevInApp-Info">
      {/* <p>app id: {app._id}</p> */}
      <p>mobileDev name: {mobileDev.brand}</p>
      <p>mobileDev OS: {mobileDev.OS}</p>
      <p>mobileDev versionOS: {mobileDev.versionOS}</p>
      <p>mobileDev language: {mobileDev.language}</p>
      <p>mobileDev description: {mobileDev.description}</p>
    </div>
  );
};

export default CardMobileDev;
