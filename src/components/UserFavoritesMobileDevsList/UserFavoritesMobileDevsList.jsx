import { getUserByToken } from "../../services/API_proyect/user.service";
import CardMobileDev from "../CardMobileDev/CardMobileDev";
import { useState, useEffect } from "react";
import "./UserFavoritesMobileDevsList.css";

const UserFavoritesMobileDevsList = () => {
  const [userDataFromDB, setUserDataFromDB] = useState({
    name: "User Test",
    mobileDevs: [],
  });

  useEffect(() => {
    (async () => setUserDataFromDB(await getUserByToken()))();
  }, []);

  return (
    <>
      {/* {showWelcome(userDataFromDB)} */}
      {showMobileDevs(userDataFromDB.mobileDevs)}
    </>
  );
};

// const showWelcome = (userDataFromDB) => {
//   console.log("userDataFromDB: ", userDataFromDB);
//   const welcome = `Hi, ${userDataFromDB.name}!`;

//   return <h1>{welcome}</h1>;
// };

const showMobileDevs = (mobileDevs) => (
  <div className="userFavoritesMobileDevs-Container">
    {mobileDevs.map(showMobileDev)}
  </div>
);

const showMobileDev = (mobileDev) => (
  <div key={mobileDev._id}>
    <CardMobileDev mobileDev={mobileDev} />
  </div>
);

export default UserFavoritesMobileDevsList;
