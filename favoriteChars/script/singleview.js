import data from "./fetchData.js";
import { characterCloserLook } from "./templates.js";
const singleView = {};

singleView.init = async () => {
  let charPost = document.querySelector(".page-post");

  const chars = await data.fetchChars();

  if (charPost) {
    /* Hiver alt ud efter "?" - bruges til at få fat i query string" */
    let search = location.search;
    /* Trækker specifikke værdier ud - "id" giver os det der står efter = */
    let charID = new URLSearchParams(search).get("id");

    const foundChar = chars.find((char) => char.id == charID);

    charPost.insertAdjacentHTML("beforeend", characterCloserLook(foundChar));
  }
};

export default singleView;
