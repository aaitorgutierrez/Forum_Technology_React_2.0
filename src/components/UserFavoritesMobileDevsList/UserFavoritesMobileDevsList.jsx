import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//import { mobileDev_getAll } from '../../services/API_proyect/mobileDev.service'
import { getUserById } from "../../services/API_proyect/user.service";
import CardMobileDev from "../CardMobileDev/CardMobileDev";
import './UserFavoritesMobileDevsList.css'
//import CardApp_inMobileDev from "../CardApp_inMobileDev/CardApp_inMobileDev";
import { useAuth } from "../../contexts/authContext";
import { getUserByToken } from "../../services/API_proyect/user.service";

const UserFavoritesMobileDevsList = () => {
    //const [mobileDevList, setMobileDevList] = useState([])
    const [userDataFromDB, setUserDataFromDB] = useState({ name: "User Test", mobileDevs: [] })
    // const { state } = useLocation();
    // const { userId } = state;
    //const { setUser, user } = useAuth();

    //const userIdTest = "648300507dbed23fb76243f6"

    // useEffect(() => {
    //     //getUserById(userId)
    //     //getUserById(userIdTest)
    //     getUserByToken()
    //         .then(user => setUserDataFromDB(user))
    //         .catch((error) => {
    //             console.log('Error fetching User data from Backend ', error)

    //             return error;
    //         });
    // }, []);

    useEffect(() => {
        (async () => setUserDataFromDB(await getUserByToken()))()
    }, [])

    // useEffect(() => {
    //     console.log("userDataFromDB: ", userDataFromDB)
    // }, [userDataFromDB])
    //console.log('UserFavoritesMobileDevsList -> userDataFromDB: ', userDataFromDB)
    //console.log('UserFavoritesMobileDevsList -> userDataFromLogIn: ', user)

    return (
        <>
            {showWelcome(userDataFromDB)}
            {showMobileDevs(userDataFromDB.mobileDevs)}
        </>
    )
}

const showWelcome = (userDataFromDB) => {
    console.log("userDataFromDB: ", userDataFromDB)
    const welcome = `Hi, ${userDataFromDB.name}!`

    return (
        <h1>{welcome}</h1>
    )
}

const showMobileDevs = (mobileDevs) =>
    <div className='userFavoritesMobileDevs-Container'>
        {mobileDevs.map(showMobileDev)}
    </div>

const showMobileDev = (mobileDev) =>
    <div key={mobileDev._id}>
        <CardMobileDev mobileDev={mobileDev} />
    </div>

export default UserFavoritesMobileDevsList