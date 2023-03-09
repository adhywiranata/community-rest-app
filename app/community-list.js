import { getAllCommunities } from "../services/community";

const load = async (title = "") => {
  const data = await getAllCommunities(title);

  const listWrapper = document.querySelector("#community-list");

  listWrapper.innerHTML = renderTemplate(data);
};

window.addEventListener("DOMContentLoaded", () => {
  load();
  attach();
});

const renderTemplate = (communities) => {
  return communities.map(renderCard).join("");
};

const renderCard = (community) => `
  <div class="card">
    <h2>${community.title}</h2>
    <p>posted by John, 5 days ago</p>
  </div>
`;

const attach = () => {
  const input = document.querySelector("#filter-community");

  input.addEventListener("input", (evt) => {
    load(evt.target.value);
  });
};
