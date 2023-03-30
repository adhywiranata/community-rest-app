import axios from "axios";

export const deleteCommunityById = async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/communities/${id}`
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
