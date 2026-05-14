import api from "../api/axios";

const API_KEY = "PLARRVUS637MVASUUA965B9X4";

export const getWeather = async (city) => {
  const res = await api.get(`/timeline/${city}`, {
    params: {
      unitGroup: "metric",
      key: API_KEY,
    },
  });

  return res.data;
};
