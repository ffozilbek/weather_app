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
  Droplets,
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

const HourluWeather = ({ data }) => {
  const houlyData = data.days[0].hours;
  // console.log(houlyData);

  return (
    <div className="card w-full">
      <div className="card__header">
        <h1 className="font-bold text-stone-600">Hourly Weather</h1>
      </div>
      <div className="flex overflow-y-auto pb-3">
        {houlyData.map((item) => {
          const Icon = weatherIcons[item.icon];
          return (
            <div
              key={item.datetime}
              className="flex flex-col items-center px-5 gap-y-1"
            >
              <span className="whitespace-nowrap">
                {new Date(`1970-01-01T${item.datetime}`).toLocaleTimeString(
                  "en-US",
                  {
                    hour: "numeric",
                  },
                )}
              </span>
              <Icon />
              <span>{Math.round(item.temp)}°</span>
              <span className="flex items-center space-x-1">
                <Droplets className="text-blue-300" size={15} />{" "}
                <span>{Math.round(item.humidity)}%</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HourluWeather;
