const body = document.querySelector("body");

// PAGE
const header = body.appendChild(document.createElement("header"));
const main = body.appendChild(document.createElement("main"));
const footer = body.appendChild(document.createElement("footer"));

header.textContent = "header";
main.textContent = "main";
footer.textContent = "footer";

// HEADER
const divLogobar = header.appendChild(document.createElement("div"));
const divNavigation = header.appendChild(document.createElement("div"));
const navbar = header.appendChild(document.createElement("navbar"));

["acceuil", "search", "account"].forEach((element) => {
  let link = navbar.appendChild(document.createElement("a"));
  let div = link.appendChild(document.createElement("div"));
  let btnName = div.appendChild(document.createElement("p")); // => can I put a title like h3 ?
  link.setAttribute("href", `#${element}.html`);
  btnName.textContent = element;
});

// MAIN
const firstSection = main.appendChild(document.createElement("section"));
// missing random function

const secondSection = main.appendChild(document.createElement("section"));
// missing description

const thirdSection = main.appendChild(document.createElement("section"));
// missing links to communautary chat, random artpiece and popular pieces

// FOOTER
const links = footer.appendChild(document.createElement("div"));
let linkList = ["twitter", "facebook", "reddit", "github"];
linkList.forEach((element) => {
  links.appendChild(document.createElement("a"));
  a.setAttribute("href", "#");
});

async function fetchData(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
  } catch (error) {
    console.log("Error Message :\n" + error);
  }
}
