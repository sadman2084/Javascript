// Finding the elements
const form = document.querySelector("form");
const name = form.querySelector("div #name"); // form to div to name
const email = form.querySelector("div #email");
const password = form.querySelector("div #password");

form.addEventListener("submit", formHandler);

function formHandler(e) {
  e.preventDefault(); // Prevent the default form submission

  const userInfo = {
    name: name.value,
    email: email.value,
    password: password.value,
  };


  document.write("<h2>Form Submitted</h2>");
  document.write("<p>Name: " + userInfo.name + "</p>");
  document.write("<p>Email: " + userInfo.email + "</p>");
  document.write("<p>Password: " + userInfo.password + "</p>");


  name.value = "";
  email.value = "";
  password.value = "";
}
