const main = document.querySelector("main");

let toggleBtn = document.getElementById("toggler");
let loginForm = document.getElementById("login");
let signinForm = document.getElementById("signin");
let [loginSubmitBtn, signinSubmitBtn] = document.querySelectorAll("button");

loginForm.classList.add("hidden");

toggleBtn.addEventListener("click", () => {
  document
    .querySelectorAll("main div div")
    .forEach((x) => x.classList.toggle("selected"));
  loginForm.classList.toggle("hidden");
  signinForm.classList.toggle("hidden");
});

loginSubmitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let inputs = document.querySelectorAll("#login input");
  inputs.forEach((input) => {
    console.log(input.name);
    console.log(input.value);
  });
  let div = main.appendChild(document.createElement("div"));
  div.textContent = "we got you, you're well logged in";
});

signinSubmitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let inputs = Array.from(document.querySelectorAll("#signin input"));
  const emptyFields = inputs.filter((input) => !input.value.trim().length);

  if (emptyFields.length) {
    let div = main.appendChild(document.createElement("div"));
    div.textContent =
      "you missed the following fields : " +
      emptyFields.map((input) => input.name).join(", ");
    div.classList.add("warn");
    return;
  }

  let div = main.appendChild(document.createElement("div"));
  div.textContent = "we got you, you might receive an email soon, who nose";
  div.classList.add("info");
});
