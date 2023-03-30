import axios from "axios";

import { API_ENDPOINT } from "../lib/constants";

export const createCommunity = async (newCommunityData) => {
  try {
    await axios.post(`${API_ENDPOINT}/communities`, {
      title: newCommunityData.title,
      message: newCommunityData.message,
    });
  } catch (err) {
    console.log(err);
  }
};
