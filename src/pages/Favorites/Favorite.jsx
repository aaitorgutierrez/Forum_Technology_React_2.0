import React from "react";
import UserFavoritesMobileDevsList from "../../components/UserFavoritesMobileDevsList/UserFavoritesMobileDevsList";
import UserFavoritesAppsList from "../../components/UserFavoritesAppsList/UserFavoritesAppsList";
import { useState } from "react";
import "./Favorite.css";

const Favorite = () => {
  const [showMobileDevFavorite, setMobileDevFavorite] = useState(true);
  return (
    <>
      <div className="btn-favorite-container">
        <button
          className={`btn-favoriteMarca ${
            showMobileDevFavorite ? "selected" : ""
          }`}
          onClick={() => setMobileDevFavorite(true)}
        >
          Brands
        </button>
        <button
          className={`btn-favoriteApp ${
            !showMobileDevFavorite ? "selected" : ""
          }`}
          onClick={() => setMobileDevFavorite(false)}
        >
          Apps
        </button>
      </div>
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
