import { createCommunity } from "../services/createCommunity";
import { getAllCommunities } from "../services/getCommunities";

// generate card component / template
const communityCardComponent = (communityData) => {
  return `
    <div class="card">
      <h2>${communityData.title}</h2>
      <p>${communityData.message}</p>
    </div>
  `;
};

const renderCommunityList = async (keyword) => {
  const data = await getAllCommunities(keyword);

  const communityCardList = data.map((community) =>
    communityCardComponent(community)
  );

  const cardListWrapper = document.querySelector("#community-list");

  cardListWrapper.innerHTML = communityCardList.join("");
};

const applyFilterFunctionality = () => {
  // apply functionalities for filter
  const filterInput = document.querySelector("#filter-community");
  const filterButton = document.querySelector("#submit-filter");
  const clearFilterButton = document.querySelector("#clear-filter");

  filterButton.addEventListener("click", () => {
    const filterValue = filterInput.value;

    renderCommunityList(filterValue);
  });

  clearFilterButton.addEventListener("click", () => {
    renderCommunityList("");
  });
};

const applyPopupFormFunctionality = () => {
  // OPEN-CLOSE Popup Functionality
  const openPopupButton = document.querySelector("#create-community");
  const closePopupButton = document.querySelector("#close-popup");

  openPopupButton.addEventListener("click", () => {
    const popup = document.querySelector("#community-popup-form");

    popup.style.display = "block";
  });

  closePopupButton.addEventListener("click", () => {
    const popup = document.querySelector("#community-popup-form");

    popup.style.display = "none";
  });

  // Form submissions Functionality
  const saveCommunityButton = document.querySelector("#save-community-button");

  saveCommunityButton.addEventListener("click", (e) => {
    e.preventDefault(); // to prevent form to reload somewhere

    const title = document.querySelector("#input-community-title").value;
    const message = document.querySelector("#input-community-message").value;

    createCommunity({ title, message });
  });
};

// runner / business function
const renderCommunityApp = async () => {
  const layoutUI = `
    <div class="filter">
      <input type="text" id="filter-community" placeholder="filter community" />
      <button id="submit-filter">Filter</button>
      <button id="clear-filter">Clear Filter</button>
      <button id="create-community">Create New Community</button>
    </div>
    <div id="community-list"></div>
    <div id="community-popup-form">
      <button id="close-popup">close</button>
      <h3>Create New Community</h3>
      <form>
        <label>
          <span>Community Name</span>
          <input id="input-community-title" type="text">
        </label>
        <br/>
        <label>
          <span>Community Message</span>
          <input id="input-community-message" type="text">
        </label>
        <br/>

        <button id="save-community-button">Save</button>
      </form>
    </div>
  `;

  // inject the UI to the container
  const communityContainer = document.querySelector("#community-container");

  communityContainer.innerHTML = layoutUI;

  // first load
  renderCommunityList("");

  // apply functionality
  applyFilterFunctionality();

  // apply popup functionality
  applyPopupFormFunctionality();
};

addEventListener("DOMContentLoaded", () => {
  renderCommunityApp();
});
