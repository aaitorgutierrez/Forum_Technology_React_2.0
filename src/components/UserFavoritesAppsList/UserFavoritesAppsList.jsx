import { useState, useEffect } from "react";
import CardApp from "../CardApp/CardApp";
import "./UserFavoritesAppsList.css";
import { getUserByToken } from "../../services/API_proyect/user.service";

const UserFavoritesAppsList = () => {
  const [userDataFromDB, setUserDataFromDB] = useState({
    name: "User Test",
    apps: [],
  });

  useEffect(() => {
    (async () => setUserDataFromDB(await getUserByToken()))();
  }, []);

  return (
    <>
      {/* {showWelcome(userDataFromDB)} */}
      {showApps(userDataFromDB.apps)}
    </>
  );
};

// const showWelcome = (userDataFromDB) => {
//   const welcome = `Hi, ${userDataFromDB.name}!`;

//   return <h1>{welcome}</h1>;
// };

const showApps = (apps) => (
  <div className="userFavoritesApps-Container">{apps.map(showApp)}</div>
);

const showApp = (app) => (
  <div key={app._id}>
    <CardApp app={app} />
  </div>
);

export default UserFavoritesAppsList;
