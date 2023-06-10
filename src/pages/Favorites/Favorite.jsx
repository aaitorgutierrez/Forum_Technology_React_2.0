import React from "react";
import UserFavoritesMobileDevsList from "../../components/UserFavoritesMobileDevsList/UserFavoritesMobileDevsList";
import UserFavoritesAppsList from "../../components/UserFavoritesAppsList/UserFavoritesAppsList";
import { useState } from "react";
import "./Favorite.css";

const Favorite = () => {
  const [showMobileDevFavorite, setMobileDevFavorite] = useState(true);
  return (
    <>
      <button
        className={`btn-favorite ${showMobileDevFavorite ? "selected" : ""}`}
        onClick={() => setMobileDevFavorite(true)}
      >
        Marcas
      </button>
      <button
        className={`btn-favorite ${!showMobileDevFavorite ? "selected" : ""}`}
        onClick={() => setMobileDevFavorite(false)}
      >
        Apss
      </button>
      <div>
        {showMobileDevFavorite ? (
          <UserFavoritesMobileDevsList />
        ) : (
          <UserFavoritesAppsList />
        )}
      </div>
    </>
  );
};

export default Favorite;
