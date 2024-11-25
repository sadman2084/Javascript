const input = document.querySelector("input");



input.addEventListener("blur", function (event) {
 //document.write(event.target.value);
  input.value = event.target.value.toUpperCase();
});



input.addEventListener("focus", function () {
    console.log("focus is occured");
    input.style.backgroundColor = "orange";
    input.style.padding = "2rem";
});



input.addEventListener("focusin", function () {
  console.log("focusin is occured");
});



input.addEventListener("focusout", function () {
  console.log("focusout is occured");
});