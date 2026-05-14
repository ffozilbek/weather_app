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

const DailyWeather = ({ data }) => {
  console.log(data);

  return (
    <div className="card flex-1/3">
      <div className="card__header">
        <h1 className="font-bold text-stone-600">Weakly Weather</h1>
      </div>
      <div>
        <ul>
          {data?.days?.slice(0, 10).map((day) => {
            const Icon = weatherIcons[day.icon];
            return (
              <li key={day.datetime}>
                <div className="flex flex-col">
                  <span className="font-semibold">
                    {new Date(day.datetime).toLocaleDateString("en-US", {
                      weekday: "short",
                    })}
                  </span>
                  <span className="text-sm text-stone-700">
                    {new Date(day.datetime).toLocaleDateString("en-US", {
                      month: "numeric",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex space-x-2 items-center">
                  <Icon />
                  <div>
                    <span className="font-semibold text-2xl">
                      {Math.round(day.tempmax)}°
                    </span>
                    <span>{Math.round(day.tempmin)}°</span>
                  </div>
                </div>
                <div className="flex space-x-2 items-center">
                  <Droplets className="text-blue-300" size={20} />{" "}
                  <span>{day.precipprob}</span>%
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DailyWeather;
