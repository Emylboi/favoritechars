async function fetchChars() {
  try {
    const response = await fetch("../data/characters.json");
    const chars = await response.json();
    return chars;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}
const charData = await fetchChars();

const app = {};

app.init = () => {
  const characterContainer = document.querySelector(".character-Container");
  const listBtn = document.querySelector(".list-Button");
  const gridBtn = document.querySelector(".grid-Button");

  const characterTempList = (character) =>
    `<div class="character-ListView">
        <img src="${character.image}" alt="" class="character-Image" />
        <p class="character-Name">${character.name}</p>
        <p class="character-Gender">${character.gender}</p>
        <p class="character-Race">${character.race}</p>
        <p class="character-Class">${character.class}</p>
    </div>`;

  const characterTempGrid = (character) =>
    `<div class="character-GridView">
    <img src="${character.image}" alt="" class="character-Image" />
    <div class="gridView-Container">
        <p class="character-Name">${character.name}</p>
        <p class="character-Gender">${character.gender}</p>
        <p class="character-Race">${character.race}</p>
        <p class="character-Class">${character.class}</p>
    </div>
    </div>`;

  const renderList = () => {
    characterContainer.replaceChildren();
    charData.forEach((character) => {
      characterContainer.insertAdjacentHTML(
        "beforeend",
        characterTempList(character)
      );
    });
  };

  const renderGrid = () => {
    characterContainer.replaceChildren();
    charData.forEach((character) => {
      characterContainer.insertAdjacentHTML(
        "beforeend",
        characterTempGrid(character)
      );
    });
  };

  listBtn.addEventListener("click", renderList);
  gridBtn.addEventListener("click", renderGrid);

  renderList();
};

app.init();
