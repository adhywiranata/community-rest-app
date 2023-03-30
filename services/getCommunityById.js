import axios from "axios";
import { API_ENDPOINT } from "../lib/constants";

export const getCommunityById = async (id) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/communities/${id}`);

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
