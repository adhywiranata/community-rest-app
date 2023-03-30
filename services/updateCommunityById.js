import axios from "axios";
import { API_ENDPOINT } from "../lib/constants";

export const updateCommunityById = async (communityData) => {
  try {
    await axios.put(`${API_ENDPOINT}/communities/${communityData.id}`, {
      title: communityData.title,
      message: communityData.message,
    });
  } catch (err) {
    console.log(err);
  }
};
