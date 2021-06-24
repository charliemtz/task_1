import { API_URL } from "./api";
import axios from "axios";

export const getPokemonById = async(id) => {
  const pokemon = await axios.get(API_URL + id);
  return pokemon;
};
