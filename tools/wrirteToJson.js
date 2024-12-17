const fs = require("fs");

function writeToJson(URL, content) {
  let json = JSON.stringify(content);
  fs.writeFile(URL, json, "utf8", (err) => {
    if (err) console.log(err);
    else {
      console.log("File written successfully\n");
      console.log("The written file has the following contents:");
      console.log(fs.readFileSync(URL, "utf8"));
    }
  });
}

ArtPieces = [
  {
    id: 123456,
    title: "The Babel Tower",
    author: "Pieter Brueghel l'Ancien",
    date: "1563",
    imageURL: "../Assets/Tests/BabelTower.jpg",
  },
  {
    id: 123457,
    title: "El Cargador de Flores",
    author: "Diego Rivera",
    date: "1935",
    imageURL: "../Assets/Tests/Carador de flores.jpg",
  },
  {
    id: 123458,
    title: "The Mona Lisa",
    author: "Léonard de Vinci",
    date: "1516", // inexact mais choix subjectif our simplifier
    imageURL: "../Assets/Tests/Joconde.jpg",
  },
  {
    id: 123459,
    title: "Praying Hands",
    author: "Albrecht Durer",
    date: "1508",
    imageURL: "../Assets/Tests/Praying Hands.jpg",
  },
  {
    id: 123460,
    title: "Starry Night",
    author: "Vincent Van Gogh",
    date: "1889",
    imageURL: "../Assets/Tests/Starry Night.jpg",
  },
];

writeToJson("./artpieces.json", ArtPieces);
