import Header from "./components/header/Header.jsx";
import climateImage from "./assets/body-bg.png";
import WeatherBoard from "./components/weather/WeatherBoard.jsx";

const Page = () => {
  return (
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
  );
};

export default Page;