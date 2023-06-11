import MobileDevList from "../../components/MobileDevList/MobileDevList";
import { useMediaQuery } from "react-responsive";

const MobileDevs = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 880 });
  return (
    <div className="outletContainer">
      {isLargeScreen ? <ShowTitleMsgBigScreen /> : <ShowTitleMsgSmallScreen />}

      <MobileDevList />
    </div>
  );
};

const ShowTitleMsgBigScreen = () => (
  <h1>
    Enjoy all our awesome <u>Brands</u> and don't forget to follow them!
  </h1>
);

const ShowTitleMsgSmallScreen = () => (
  <h1>
    <u>Brands</u>
  </h1>
);

export default MobileDevs;
