import axios from "axios";

export const getAllCommunities = async (keyword) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/communities?q=${keyword}`
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
