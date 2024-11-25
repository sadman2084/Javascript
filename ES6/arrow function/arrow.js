
// demo1 - must use parenthesis for no parameters, but for one parameter its optional
function display1(){
  document.write("cattto zindabad  1"+"<br>");
}
const display2 = () =>{
    document.write("cattto zindabad  2"+"<br>");
}
display1();
display2();




// demo2 - no need to use curly braces if returning or dealing with single statement
function display3(){ document.write("cattto zindabad  3"+"<br>");}
const display4 = () => document.write("cattto zindabad  4"+"<br>");
display3();
display4();




// returning value in arrow function - no need to use curly braces if returning or dealing with single statement
function display5(){ 
    return "cattto zindabad  5";
}
const display6 = () => "cattto zindabad  6";
document.write(display5()+"<br>")
document.write(display6()+"<br>")




// parameters in arrow function 
function add1(x,y){ 
    return x+y;
}
const add2 = (x,y) => x+y;
document.write(add1(10,20)+"<br>")
document.write(add2(20,30)+"<br>")




// Arrow function with map and filter
var students = [
    {
        id : 1,
        name : 'cat',
        gpa : 3.92
    },
    {
        id : 1,
        name : 'dog',
        gpa : 3.12
    },
    {
        id : 1,
        name : 'NOone',
        gpa : 2.92
    },
    {
        id : 1,
        name : 'Limon',
        gpa : 4.92
    },
]
console.log(students);


// returning the student name whose gpa is greater than 3 using traditional function
function studentsName1(){
    return students.filter(function(x){
        return x.gpa > 3 
    }).map(function(y){
        return y.name;
    })
}
console.log(studentsName1())

// returning the student name whose gpa is greater than 3 using arrow function
const studentsName2 = () =>  students.filter(x => x.gpa>3).map(y => y.name);
document.write(studentsName2()+"<br>")