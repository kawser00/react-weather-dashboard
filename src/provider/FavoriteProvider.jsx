import { FavoriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const addToFavorite = (location, longitude, latitude) => {
    setFavorites([...favorites, { location, longitude, latitude }]);
  };

  const removeFromFavorite = (location) => {
    const updatedFavorites = favorites.filter(
      (fav) => fav.location !== location
    );
    setFavorites(updatedFavorites);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorite, removeFromFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
