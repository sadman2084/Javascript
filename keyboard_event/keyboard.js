const textarea = document.querySelector("textarea");
//if you press the key 
textarea.addEventListener("keydown", function (e) {
    if (e.repeat) {
        alert("do not repeat");
    }
});




//textarea.addEventListener("keypress", function () {
//document.write("keypress");
// });




textarea.addEventListener("keyup", function (e) {
    //document.write(e.key);
    //document.write(e.keyCode);
    //document.write(e.shiftkey);
});