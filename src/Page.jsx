import climateImage from "./assets/body-bg.png";
import Header from "./components/header/Header.jsx";
import WeatherBoard from "./components/weather/WeatherBoard.jsx";
import { useWeatherContext } from "./hooks";

const Page = () => {
  const { loading } = useWeatherContext();

  return (
    <>
      {loading.state ? (
        <div className="flex bg-gray-200 rounded-md w-96 p-8 mt-14 mx-auto">
          <p className="text-center text-3xl text-black">{loading.message}</p>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url('${climateImage}')` }}
          className="grid place-items-center h-screen bg-no-repeat bg-cover text-white"
        >
          <Header />
          <main className="w-full">
            <section className="w-full">
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
