const data = {};

data.fetchChars = async () => {
  try {
    const response = await fetch("./data/characters.json");
    const chars = await response.json();
    return chars;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
};

export default data;
