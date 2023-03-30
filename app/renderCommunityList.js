import { deleteCommunityById } from "../services/deleteCommunityById";
import { getAllCommunities } from "../services/getCommunities";
import { getCommunityById } from "../services/getCommunityById";

// generate card component / template
const communityCardComponent = (communityData) => {
  return `
    <div class="card">
      <h2>${communityData.title}</h2>
      <p>${communityData.message}</p>
      <button class="show-popup" id="card-${communityData.id}">Show</button>
      <button class="delete-popup" id="card-${communityData.id}">Delete</button>
    </div>
  `;
};

export const renderCommunityList = async (keyword) => {
  const data = await getAllCommunities(keyword);

  const communityCardList = data.map((community) =>
    communityCardComponent(community)
  );

  const cardListWrapper = document.querySelector("#community-list");

  cardListWrapper.innerHTML = communityCardList.join("");

  const showPopup = document.querySelectorAll(".show-popup");

  showPopup.forEach((card) => {
    card.addEventListener("click", async () => {
      const cardId = card.attributes.id.value.slice(5);

      const data = await getCommunityById(cardId);

      document.querySelector("#save-community-type").value = "update";
      document.querySelector("#input-community-id").value = cardId;

      const popup = document.querySelector("#community-popup-form");

      popup.style.display = "block";

      // populate fields into the form
      const titleInput = document.querySelector("#input-community-title");
      const messageInput = document.querySelector("#input-community-message");

      titleInput.value = data.title;
      messageInput.value = data.message;
    });
  });

  const deletePopup = document.querySelectorAll(".delete-popup");

  deletePopup.forEach((card) => {
    card.addEventListener("click", async () => {
      const cardId = card.attributes.id.value.slice(5);

      await deleteCommunityById(cardId);

      renderCommunityList("");
    });
  });
};
