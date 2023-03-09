import "./style.css";
import javascriptLogo from "./javascript.svg";

import "./app/community-list";

document.querySelector("#app").innerHTML = `
  <div>
    <h1>CommunityHub</h1>
    <div>
      <input type="text" id="filter-community" placeholder="filter community" />
    </div>
    <div id="community-list"></div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
