const div = document.querySelector("div");


//practice one by one by uncommenting one listener at a time


div.addEventListener("click", function (event) {
    document.write("click is occured");
    //   document.write(event.target);
    //   document.write(event.target.id);
    //   document.write(event.target.className);
    //   document.write(event.target.innerHTML);
    //   document.write(event.target.innerText);
    //  document.write(event.target.textContent);
});

div.addEventListener("dblclick", function () {
    document.write("dblclick is occured");
});
// div.addEventListener("mousedown", function () {
//     document.write("mousedown is occured");
// });
// div.addEventListener("mouseup", function () {
//     document.write("mouseup is occured");
// });
// div.addEventListener("mouseenter", function () {
//     document.write("mouseenter is occured");
// });
// div.addEventListener("mouseleave", function () {
//     document.write("mouseleave is occured");
// });
// div.addEventListener("mouseover", function () {
//     document.write("mouseover is occured");
// });
div.addEventListener("mousemove", function (e) {
    //  document.write("mousemove is occured");
    //  document.write("clientX = " + e.clientX + ", clientY = " + e.clientY);
    console.log("offsetX = " + e.offsetX + ", offsetY = " + e.offsetY);
});

const buttons = document.querySelectorAll(".btn");

Array.from(buttons).map((button) => {
    button.addEventListener("click", function (e) {
        document.write(e.target.innerText);
    });
});