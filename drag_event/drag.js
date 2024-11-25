const p = document.querySelector("p");
const div = document.querySelector("div");

p.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("Text", e.target.id);
});



div.addEventListener("dragover", (e) => {
    e.preventDefault();
});



div.addEventListener("drop", (e) => {
    let data = e.dataTransfer.getData("Text");
    div.appendChild(document.getElementById(data));
    e.preventDefault();
});