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
