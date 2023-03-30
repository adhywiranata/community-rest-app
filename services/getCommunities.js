import axios from "axios";
import { API_ENDPOINT } from "../lib/constants";

export const getAllCommunities = async (keyword) => {
  try {
    const response = await axios.get(
      `${API_ENDPOINT}/communities?q=${keyword}`
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
