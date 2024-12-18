// ### Functions ###
function addUsers(users) {
  let storedUsers = localStorage.getItem("users") || [];
  storedUsers.push(...users);
  localStorage.setItem("users", storedUsers);
}

// ### Variables ###
const main = document.querySelector("main");

let toggleBtn = document.getElementById("toggler");
let loginForm = document.getElementById("login");
let signinForm = document.getElementById("signin");
let [loginSubmitBtn, signinSubmitBtn] = document.querySelectorAll("button");
loginForm.classList.add("hidden");

// ### Event Manager ###
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
  inputs.forEach((input) => input.value.trim());
  const emptyFields = inputs.filter((input) => !input.value.length);

  //currently fields order hardcoded cause no time, to modify

  // empty field verification
  if (emptyFields.length) {
    let div = main.appendChild(document.createElement("div"));
    div.textContent =
      "you missed the following fields : " +
      emptyFields.map((input) => input.name).join(", ");
    div.classList.add("warn");
    return;
  }

  // quick check for names
  let validationRegex = /^[^0-9!@#$%^&*]{1,32}$/;
  for (let input of inputs.slice(0, 2)) {
    if (!input.value.match(validationRegex)) {
      let div = main.appendChild(document.createElement("div"));
      div.textContent = "Sorry, one of your name fields appear invalid to me.";
      div.textContent +=
        "\nEither you tried playing with me or I was made wrong";
      div.classList.add("warn");
      return;
    }
  }

  // check email valid
  validationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!inputs.at(2).value.trim().match(validationRegex)) {
    let div = main.appendChild(document.createElement("div"));
    div.textContent = "email is not valid";
    div.classList.add("warn");
    return;
  }

  // password valid
  validationRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  if (!inputs.at(-2).value.trim().match(validationRegex)) {
    let div = main.appendChild(document.createElement("div"));
    div.textContent = "password is not valid, must contain at least ";
    div.classList.add("warn");
    return;
  }

  // password confirmation
  if (inputs.at(-2).value !== inputs.at(-1).value) {
    let div = main.appendChild(document.createElement("div"));
    div.textContent = "password and confirmation are not identical";
    div.classList.add("warn");
    return;
  }

  addUsers([
    {
      name: inputs[0],
      surname: inputs[1],
      email: inputs[2],
      password: inputs[3],
    },
  ]);

  let div = main.appendChild(document.createElement("div"));
  div.textContent = "we got you, you might receive an email soon, who nose";
  div.classList.add("info");
});
