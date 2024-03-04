import data from "./fetchData.js";
import { characterTempGrid, characterTempList } from "./templates.js";

const renderData = {};

renderData.init = async () => {
  let characterContainer = document.querySelector(".character-Container");
  const listBtn = document.querySelector(".list-Button");
  const gridBtn = document.querySelector(".grid-Button");

  const chars = await data.fetchChars();

  if (characterContainer) {
    chars.forEach((char) => {
      characterContainer.insertAdjacentHTML("beforeend",characterTempList(char));
    });
  }

  const renderList = () => {
    characterContainer.replaceChildren();
    chars.forEach((char) => {
      characterContainer.insertAdjacentHTML(
        "beforeend",
        characterTempList(char)
      );
    });
  };

  const renderGrid = () => {
    characterContainer.replaceChildren();
    chars.forEach((char) => {
      characterContainer.insertAdjacentHTML(
        "beforeend",
        characterTempGrid(char)
      );
    });
  };  

  listBtn.addEventListener("click", renderList);
  gridBtn.addEventListener("click", renderGrid);

};

export default renderData;
