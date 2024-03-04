export const characterTempList = (character) =>
  `<div class="character-ListView">
        <img src="${character.image}" alt="" class="character-Image" />
        <p class="character-Name">${character.name}</p>
        <p class="character-Gender">${character.gender}</p>
        <p class="character-Race">${character.race}</p>
        <p class="character-Class">${character.class}</p>
        <button><a href="post.html?id=${character.id}">Take a closer look at ${character.name}</a></button>
    </div>`;

export const characterTempGrid = (character) =>
  `<div class="character-GridView">
        <img src="${character.image}" alt="" class="character-Image" />
        <div class="gridView-Container">
            <p class="character-Name">${character.name}</p>
            <p class="character-Gender">${character.gender}</p>
            <p class="character-Race">${character.race}</p>
            <p class="character-Class">${character.class}</p>
            <button><a href="post.html?id=${character.id}">${character.name}</a></button>
        </div>
    </div>`;

export const characterCloserLook = (character) =>
  `<div class="character-CloseView">
        <img src="${character.image}" alt="" class="character-Image" />
        <div class="CloseView-Container">
            <p class="character-Name">${character.name}</p>
            <p class="character-Gender">${character.gender}</p>
            <p class="character-Race">${character.race}</p>
            <p class="character-Class">${character.class}</p>
            <button><a href="index.html"</a>Back</button>
        </div>
    </div>`;
