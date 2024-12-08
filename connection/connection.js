const main = document.querySelector("main");
const flipCard = document.querySelector(".flip-card");
const toggleInscription = main.insertBefore(
  document.createElement("div"),
  flipCard
);

let array = [("Connection", "Inscription")];
array.forEach((element) => {
  let el = toggleInscription.appendChild(document.createElement("div"));
  el.textContent = element;
  el.style.padding = "1em";
});
