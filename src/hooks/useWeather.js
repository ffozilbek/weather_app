import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../services/servise";

export const useWeather = (city) => {
  return useQuery({
    queryKey: ["weather", city],
    queryFn: () => getWeather(city),
    enabled: !!city,
    keepPreviousData: true,
  });
};
