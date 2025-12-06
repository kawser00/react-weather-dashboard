import { useState, useEffect } from "react";
import RedHeartIcon from "../../assets/heart-red.svg";
import HeartIcon from "../../assets/heart.svg";
import { useWeatherContext } from "../../hooks";
import { useFavoriteContext } from "../../hooks/useFavoriteContext";

function AddToFavorite() {
  const [isFavorite, setIsFavorite] = useState(false);
  const { weatherData } = useWeatherContext();
  const { latitude, longitude, location } = weatherData;
  const { favorites, addToFavorite, removeFromFavorite } = useFavoriteContext();
  const found = favorites.find((fav) => fav.location === location);

  const handleFavorites = () => {
    if (found) {
      removeFromFavorite(location);
    } else {
      addToFavorite(location, longitude, latitude);
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    setIsFavorite(found);
  }, [found]);

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm cursor-pointer md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavorites}
        >
          <span>Add to Favorite</span>
          <img src={isFavorite ? RedHeartIcon : HeartIcon} alt="heart" />
        </button>
      </div>
    </div>
  );
}

export default AddToFavorite;