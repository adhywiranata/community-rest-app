import axios from "axios";

export const createCommunity = async (newCommunityData) => {
  try {
    await axios.post("http://localhost:3000/communities", {
      title: newCommunityData.title,
      message: newCommunityData.message,
    });
  } catch (err) {
    console.log(err);
  }
};
