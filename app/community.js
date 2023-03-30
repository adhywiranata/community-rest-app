import { applyFilterFunctionality } from "./filterCommunity";
import { applyPopupFormFunctionality } from "./handlePopupForm";

import { renderCommunityList } from "./renderCommunityList";

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
      <form>
        <input type="hidden" id="save-community-type" />
        <input type="hidden" id="input-community-id" />
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
