//VARIABLE DECLARTION

//if we use "let",the value of x will need a scope.in this case,the scope is {} of if statement
let x=6;
if(true)
{
    let x=5;
}
document.write(x +"<br>");
//output will be 6 not 5.the scope of 5 is in if statement

//concatation
let name="sadman";
let m=`my name is ${name} .`;
document.write(m +"<br>");


//to declare fucnction
//to sum of two number
const add=(x,y)=>{
    document.write(x+y);
}
add(12,12);