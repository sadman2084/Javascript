//Arithmetic operator
document.write("Arithmetic Operator" + "<br><br>");
document.write("Sum of 5 and 2: " + (5 + 2) + "<br>");
document.write("Minus of 5 and 2: " + (5 - 2) + "<br>");
document.write("Multiply of 5 and 2: " + 5 * 2 + "<br>");
document.write("division of 5 and 2: " + 5 / 2 + "<br>");
document.write("Power of 5 and 2: " + 5 ** 2 + "<br><br>");

//Increment and Decrement
document.write("Increment and Decrement" + "<br><br>");
var a = 5; //Assignment operator
document.write("Postincrement(a++): " + a++ + "<br>");
document.write("Postincrement(a++): " + a++ + "<br>");
document.write("Postdecrement(a--): " + a-- + "<br>");
document.write("Postdecrement(a--): " + a-- + "<br><br>");

document.write("Preincrement(++a): " + ++a + "<br>");
document.write("Preincrement(++a): " + ++a + "<br>");
document.write("Predecrement(--a): " + --a + "<br>");
document.write("Predecrement(--a): " + --a + "<br><br>");


//Assignment Operator
document.write("Assignment Operator" + "<br><br>");
var x=6;
x+=2;
document.write("Using (+=): "+ x + "<br>");

x-=2;
document.write("Using (-=): "+ x + "<br>");

x*=2;
document.write("Using (+=): "+ x + "<br>");

x/=2;
document.write("Using (+=): "+ x + "<br><br>");

//Relational operator
document.write("Relational Operator" + "<br><br>");
var n=2;
var m=6;
document.write((n>m) + "<br>");//returns true or false
document.write((n==m)  + "<br>");//returns true or false and it checks the value
document.write((n=="m")  + "<br>");//returns true or false and it checks the value
document.write((n==="m")  + "<br>");//returns true or false and it checks the datatype
document.write((n>=m)  + "<br>");//returns true or false
document.write((n!=m)  + "<br>");//returns true or false
document.write((n<=m)+ "<br>");//returns true or false
document.write((n<m)  + "<br><br></br>");//returns true or false


//Logical Operator
document.write("Logical Operator" + "<br><br>");
document.write((n>m && n<m) + "<br>");//returns true or false
document.write((n>m || n<m) + "<br>");//returns true or false
document.write((!true) + "<br>");//returns true or false
document.write((!false) + "<br>");//returns true or false
