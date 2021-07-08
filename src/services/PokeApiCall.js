export const PokeApiCall = async (url) => {
  const axios = require("axios").default;
  let data = {};
  if (url.length > 0) {
    try {
      const response = await axios.get(url);
      data = response.data;
    } catch (err) {
      console.error(err);
    }
  }
  return data;
};
