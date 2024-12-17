function createCard(object, container) {
  try {
    const title = object.title;
    const author = object.author;
    const date = object.date;
    const image = object.imageURL;
  } catch {
    throw new Error("an error happend while loading object content" + object);
  }

  const cardDiv = container.appendChild(document.createElement("div"));
  const imageBox = cardDiv.appendChild(document.createElement("div"));
  const descriptionBox = cardDiv.appendchild(document.createElement("div"));
  const cardTitle = descriptionBox.appendChild(document.createElement("h2"));
  const cardAuthor = descriptionBox.appendChild(document.createElement("h3"));
  const cardDate = descriptionBox.appendChild(document.createElement("h3"));

  imageBox.classList.add("image-box");
  imageBox.style.backgroundImage = imageURL;
  cardTitle.textContent = title;
  cardAuthor.textContent = author;
  cardDate.textContent = date;
}

const main = document.querySelector("main");
const favContainer = main.appendChild(document.createElement("div"));
const favorites = JSON.parse(localStorage.getItem("favorites")); // should contain list of objects
favorites.forEach((favorite) => {
  createCard(favorite, favContainer);
});
