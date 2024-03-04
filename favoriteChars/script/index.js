import singleView from "./singleview.js";
import renderData from "./renderData.js";

const app = {};
app.init = async () => {
  
  singleView.init();
  renderData.init();

};

app.init();
