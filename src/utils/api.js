import axios from "axios";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

export const fetchFromAPI = async (url, params = {}) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, {
    params: {
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
      ...params,
    },
  });

  return data;
};
