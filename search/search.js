function appendCards(domElement, data) {
  data.forEach((result) => {
    const card = domElement.appendChild(document.createElement("div"));
    const imgBox = card.appendChild(document.createElement("div"));
    const description = card.appendChild(document.createElement("div"));
    const name = description.appendChild(document.createElement("p"));
    const author = description.appendChild(document.createElement("p"));
    const date = description.appendChild(document.createElement("p"));

    card.classList.add("card");
    imgBox.classList.add("img-box");
    imgBox.style.backgroundImage = `url("${result.imageURL}")`;
    console.log(result.imageURL);
    description.style.backgroundColor = "bisque";

    name.textContent = result.name;
    author.textContent = result.author;
    date.textContent = result.date;
  });
}

async function getArtworks(time) {
  let response = await fetch("../artpieces.json");

  if (!response.ok) {
    throw new Error("error while fetching data");
  }

  const data = await response.json(); //only needed for API call
  const results = document.querySelector(".results");
  appendCards(results, data);
}

getArtworks(Math.random() * 1000);
