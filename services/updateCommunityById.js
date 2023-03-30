import axios from "axios";

export const updateCommunityById = async (communityData) => {
  try {
    await axios.put(`http://localhost:3000/communities/${communityData.id}`, {
      title: communityData.title,
      message: communityData.message,
    });
  } catch (err) {
    console.log(err);
  }
};
