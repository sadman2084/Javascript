


//UNCOMMENT TO RUN


// try {
//     document.write(" <br> bilai zindabad <br>");
//     document.write(s);
//     document.write("bilai murdabad");
// } catch (err) {
//     document.write(err);
// }


// finally {
//     alert("Bye Everyone");
// }



document.querySelector("#buttonCheck").addEventListener("click", function () {

    var num = document.querySelector("#inp").value;

    try {
        if (num < 5) {
            throw "input is too low"
        } else if (num > 10) {
            throw "input is too high"
        }
        document.write("this input is okey to the cat");
    } catch (err) {
        document.write(err);
    }

})