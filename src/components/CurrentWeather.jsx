import React from "react";
import {
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudSun,
  CloudMoon,
} from "lucide-react";

const weatherIcons = {
  "clear-day": Sun,
  "clear-night": Moon,
  cloudy: Cloud,
  rain: CloudRain,
  snow: CloudSnow,
  "thunder-rain": CloudLightning,
  "partly-cloudy-day": CloudSun,
  "partly-cloudy-night": CloudMoon,
};

const CurrentWeather = ({ data }) => {
  // console.log(data);
  const current = data.currentConditions;
  const currentTime = current.datetime;
  const currentDay = data.days[0].datetime;
  const Icon = weatherIcons[current.icon];

  const formatHour = (time) => {
    return new Date(`1970-01-01T${time}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDay = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div className="card flex-2/3 relative overflow-hidden">
      <div className="card__header flex items-center justify-between mb-5">
        <h1 className="font-bold text-stone-600">Current Weather</h1>
        <p className="text-sm">
          {formatHour(currentTime)} / {formatDay(currentDay)}
        </p>
      </div>
      <div className="picture w-full h-100 rounded-lg mb-5 flex items-center justify-center flex-col text-white space-y-2 select-none text-center px-10">
        <h1 className="text-6xl capitalize">{data.resolvedAddress}</h1>
        <p>{data.timezone}</p>
      </div>
      <div className="flex items-center justify-between gap-10 flex-col md:flex-row">
        <div>
          <div className="flex items-center space-x-5 mb-2">
            <Icon size={100} />
            <p className="text-4xl text-stone-600">
              <span className="text-7xl font-bold text-black">
                {Math.round(current.temp)}°
              </span>
              C
            </p>
          </div>
          <p>{current.conditions}</p>
        </div>

        <ul className="max-w-100 w-full">
          <li>
            Feels like:
            <span>
              <span className="font-semibold">{current.feelslike}°</span>
            </span>
          </li>
          <li>
            Wind speed:
            <span>
              <span className="font-semibold">{current.windspeed}</span> km/h
            </span>
          </li>
          <li>
            Humidity :
            <span>
              <span className="font-semibold">{current.humidity}</span> %
            </span>
          </li>
          <li>
            Visibility:
            <span>
              <span className="font-semibold">{current.visibility}</span> m
            </span>
          </li>
        </ul>
      </div>
      <p className="absolute bottom-0 left-0 text-center bg-amber-200 w-full p-2 pb-3">
        {data.description}
      </p>
    </div>
  );
};

export default CurrentWeather;
