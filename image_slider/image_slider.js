var arr = ["images/1.jpg", "images/2.jpg", "images/3.jpg"];

var imgtag = document.querySelector("img");
var count = 0;

function next() {
    count++;
    if (count >= arr.length) {
        count = 0;
        imgtag.src = arr[count];
    }
    else {
        imgtag.src = arr[count];
    }

}


function prev() {
 count--;
    if (count<0) {
        count = arr.length-1;
        imgtag.src = arr[count];
    }
    else {
        imgtag.src = arr[count];
    }
}