function appendCards(domElement, data) {
  data.forEach((result) => {
    const card = domElement.appendChild(document.createElement("div"));
    const imgBox = card.appendChild(document.createElement("div"));
    const description = card.appendChild(document.createElement("div"));
    const name = description.appendChild(document.createElement("p"));
    const author = description.appendChild(document.createElement("p"));
    const date = description.appendChild(document.createElement("p"));

    card.style.height = "280px";
    card.style.width = "200px";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.borderRadius = "10px";
    card.style.overflow = "hidden";

    imgBox.style.flexGrow = "1";
    imgBox.style.backgroundImage = "url('../Assets/Tests/BabelTower.jpg')";
    imgBox.style.backgroundSize = "cover";
    imgBox.style.backgroundPosition = "center";

    description.style.backgroundColor = "bisque";

    name.textContent = result.name;
    author.textContent = result.author;
    date.textContent = result.date;
  });
}

let mock_data = {
  ok: true,
  data: [
    {
      // for now
      url: "../Assets/Tests/BabelTower.jpg",
      name: "La Tour de Babel",
      author: "Bruegel L'Ancien",
      date: "1563",
    },
  ],
  mock_json: function () {
    return this.data;
  },
};

async function mock_fetch(time) {
  let response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(mock_data);
    }, time);
  });

  if (!response.ok) {
    throw new Error("error while fetching data");
  }
  const data = response.mock_json();
  const results = document.querySelector(".results");
  appendCards(results, data);
}

mock_fetch(Math.random() * 1000);
