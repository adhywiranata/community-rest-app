import axios from "axios";
import { API_ENDPOINT } from "../lib/constants";

export const getAllCommunities = async (title = "") => {
  try {
    const { data } = await axios.get(`${API_ENDPOINT}/communities?q=${title}`);

    return data;
  } catch (e) {}
};
