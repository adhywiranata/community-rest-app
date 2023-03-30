import { renderCommunityList } from "./renderCommunityList";

export const applyFilterFunctionality = () => {
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
