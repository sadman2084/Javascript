var arr = new Array(5);
//for taking input
for (var i = 0; i < 5; i++) {
  arr[i] = parseInt(prompt());
}
//case 1
//for output
document.write("output  <br><br>");
document.write("case 1 <br>");
for (var i = 0; i < 5; i++) {
  document.write(arr[i] + "<br>");
}

//case 2
document.write("case 2 <br>");
var arr1 = [1, 2, 3, 4, 5];
document.write(arr1 + "<br>");

//Array operation
//case 3
document.write("case 3 <br>");
arr1.push(6); //it will add 6 to the end of arr1
document.write(arr1 + "<br>");
document.write("length of array is: " + arr1.length + "<br>");

//case 4
document.write("case 4 <br>");
arr1.pop(); //it will delete the last value
document.write(arr1 + "<br>");

//case 5
document.write("case 5 <br>");
var arr2 = arr.concat(arr1);
document.write(arr2 + "<br>");

//case 6
document.write("case 6 <br>");
arr1.shift(); //it will delete the first value
document.write(arr1 + "<br>");

//case 7
document.write("case 7 <br>");
arr1.unshift(8); //it will add 8 to the first of arr1
document.write(arr1 + "<br>");

//case 8(for adding)
document.write("case 8 <br>");
arr1.splice(2, 0, 7, 9); //splice(position to add,number of value to delete,added value1,added value2);
document.write(arr1 + "<br>");

//case 9(for deleting)
document.write("case 9 <br>");
arr1.splice(1, 2); //splice(start position,end position to delete)
document.write(arr1 + "<br>");

//case 10
document.write("case 10 <br>");
var arr3 = arr1.slice(1); //will delete 1st value and store rest of the elements in arr3
document.write(arr3 + "<br>");

//case 11(number sorting)
document.write("case 11 <br>");
arr.sort(function (a, b) {
  return a - b;
});
document.write(sortedArr + "<br>");

//case 12(string sorting)
document.write("case 12 <br>");
var name=["sadman","taher","mehedi"];
name.sort();//sort in ascending order
document.write(name + "<br>");


//case 13(string sorting)
document.write("case 13 <br>");
var name=["sadman","taher","mehedi"];
name.reverse();//sort in descending order
document.write(name + "<br>");