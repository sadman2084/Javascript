var arr = new Array(5);
//for taking input
for (var i = 0; i < 5; i++) {
  arr[i] = parseInt(prompt());
}
//case 1
//for output
document.write("output  <br><br>");
document.write("case 1 <br>")
for (var i = 0; i < 5; i++) {
   document.write(arr[i] + "<br>")
  }


//case 2
document.write("case 2 <br>")
var arr1=[1,2,3,4,5];
document.write(arr1 + "<br>")


//Array operation
//case 3
document.write("case 3 <br>")
arr1.push(6);//it will add 6 to the end of arr1
document.write(arr1 + "<br>");
document.write("length of array is: "+ arr1.length+"<br>");



//case 4
document.write("case 4 <br>")
arr1.pop();//it will delete the last value
document.write(arr1 + "<br>");


//case 5
document.write("case 5 <br>")
var arr2=arr.concat(arr1);
document.write(arr2 + "<br>");