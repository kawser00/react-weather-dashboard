import { useEffect, useState } from "react";
import useLocationContext from "./useLocationContext";

const useWeather = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    wind: "",
    cloudPercentage: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const { selectedLocation } = useLocationContext();

  const fetchWeatherData = async (lat, lon) => {
    try {
      setError(null);
      setLoading((prev) => ({
        ...prev,
        state: true,
        message: "Fetching weather data...",
      }));

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );

      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      const updatedWeatherData = {
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        wind: data?.wind?.speed,
        cloudPercentage: data?.clouds?.all,
        time: data?.dt,
        longitude: data?.coord?.lon,
        latitude: data?.coord?.lat,
      };
      setWeatherData(updatedWeatherData);
    } catch (err) {
      setError(err);
    } finally {
      setLoading((prev) => ({
        ...prev,
        state: true,
        message: "",
      }));
    }
  };

  useEffect(() => {
    setLoading((prev) => ({
      ...prev,
      state: true,
      message: "Getting user location...",
    }));
    if (selectedLocation.latitude && selectedLocation.longitude) {
      const { latitude, longitude } = selectedLocation;
      fetchWeatherData(latitude, longitude);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
      });
    }
  }, [selectedLocation]);

  return {
    weatherData,
    error,
    loading,
  };
};

export default useWeather;
