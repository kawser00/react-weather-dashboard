import Page from "./Page";
import { FavoriteProvider } from "./provider";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <FavoriteProvider>
        <Page />
      </FavoriteProvider>
    </WeatherProvider>
  );
}
export default App;
