import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeather from "./components/HourlyWeather";
import DailyWeather from "./components/DailyWeather";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import { useWeather } from "./hooks/useWeather";

const App = () => {
  const [city, setCity] = useState("Tashkent");
  const { data, isLoading } = useWeather(city);

  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-5">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold">Weather App</h1>
          <p className="text-gray-600">by fayZek</p>
        </div>
        <SearchBar setCity={setCity} />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className="flex justify-between items-stretch flex-col lg:flex-row gap-5">
              <CurrentWeather data={data} />
              <DailyWeather data={data} />
            </div>
            <HourlyWeather data={data} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
