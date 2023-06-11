import "./Footer.css";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 530 });
  return (
    <>
      <div className="whiteContainer"></div>
      <footer>
        {isLargeScreen ? (
          <ShowTitleMsgBigScreen />
        ) : (
          <ShowTitleMsgSmallScreen />
        )}
        <h4 className="footerText"> Champion Group ✌</h4>
      </footer>
    </>
  );
};

const ShowTitleMsgBigScreen = () => (
  <h4>Powered by cutting-edge technology and 💖 for innovation</h4>
);
const ShowTitleMsgSmallScreen = () => <h4> Passion 💖 for innovation</h4>;

export default Footer;
