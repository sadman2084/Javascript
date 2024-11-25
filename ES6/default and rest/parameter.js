//DEFAULT PARAMETER:In a function,if we dont pass any value,then the default value will be print
function display(text = "no value found") {
    document.write(text)
}
display();//there is a parameter declared but we dont need to pass any value
//display("sadman");



//rest parameter
function printNumbers(x, y, ...z) {
    //will be use three dots
    document.write(`x = ${x}, y = ${y}, z= ${z}`)
}
printNumbers(10, 20, 30, 40, 50);


//spread parameter
function add(x, y, z) {
    return x + y + z;
}
let arr = [1, 2, 3];
sum = add(...arr);
document.write("<br>" + sum + "<br>");


let arr1=[4,5,...arr]
sum = add(...arr1);
document.write("<br>" + sum + "<br>");



let oddNumbers = [1,3,5,9]
let evenNumbers = [2,4,6,8,10]

let totalNumbers = [...oddNumbers, ...evenNumbers]
//document.write(`Total Numbers = ${totalNumbers}`)



// copy an array
let copyArray = [...totalNumbers]
// document.write(`copyArray = ${copyArray}`)

// string and spread operator
let chars = ['A', 'B', ...'anisul', 'z'];
// document.write(`${chars}`)


// spread operator and object concatenation
let personInfo1 = { name: 'SADMAN', age: 10 };
let personInfo2 = { id: '101', nationality: "bd" };

let p1 = { ...personInfo1 };
// document.write(p1)

let p2 = { ...personInfo1, ...personInfo2 };
document.write(p2)