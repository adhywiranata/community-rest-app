import { createCommunity } from "../services/createCommunity";
import { updateCommunityById } from "../services/updateCommunityById";
import { renderCommunityList } from "./renderCommunityList";

export const applyPopupFormFunctionality = () => {
  // OPEN-CLOSE Popup Functionality
  const openPopupButton = document.querySelector("#create-community");
  const closePopupButton = document.querySelector("#close-popup");

  openPopupButton.addEventListener("click", () => {
    const popup = document.querySelector("#community-popup-form");

    document.querySelector("#save-community-type").value = "create";

    // empty form fields
    const titleInput = document.querySelector("#input-community-title");
    const messageInput = document.querySelector("#input-community-message");

    titleInput.value = "";
    messageInput.value = "";

    popup.style.display = "block";
  });

  closePopupButton.addEventListener("click", () => {
    const popup = document.querySelector("#community-popup-form");

    popup.style.display = "none";
  });

  // Form submissions Functionality
  const saveCommunityButton = document.querySelector("#save-community-button");

  saveCommunityButton.addEventListener("click", async (e) => {
    e.preventDefault(); // to prevent form to reload somewhere

    const id = document.querySelector("#input-community-id").value;
    const title = document.querySelector("#input-community-title").value;
    const message = document.querySelector("#input-community-message").value;

    const saveType = document.querySelector("#save-community-type").value;

    if (saveType === "create") {
      await createCommunity({ title, message });
    }

    if (saveType === "update") {
      await updateCommunityById({ title, message, id });
    }

    renderCommunityList("");

    const popup = document.querySelector("#community-popup-form");

    popup.style.display = "none";
  });
};
