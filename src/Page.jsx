import Header from "./components/header/Header.jsx";
import climateImage from "./assets/body-bg.png";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: `url('${climateImage}')` }}
      className="grid place-items-center h-screen bg-no-repeat bg-cover text-white"
    >
      <Header />
    </div>
  );
};

export default Page;