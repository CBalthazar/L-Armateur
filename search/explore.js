import * as commons from "../commons/js/script.js";

async function getData(URL) {
  let response = await fetch(URL);
  if (!response.ok) {
    throw new Error("issue while waiting for following data :\n" + URL);
  }
  let data = response.json();
  return data;
}

const artSection = document.querySelector(".artwork-section");
getData("../artpieces.json").then((data) => {
  appendCards(artSection, data);
});
