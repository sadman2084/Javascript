// for..of loop can iterate over iterable objects such as string, array, map, set etc.
const students1 = ["ab","bc","cd","da"];
for(let name of students1){
   document.write(name +"<br>")
}

// For loop through object we can use for/in loop
const students2 = {
name: "sadman",
age: 20, 
cgpa : 2.01
}
for(let x in students2){ 
    document.write(x+"<br>"); 
    document.write(students2[x]+"<br>"); 
}

let students = {
    ID : 20,
    name : 'sadman',
    cgpa : 2.01
}
//for in
for(let x in students){
    document.write(`${x} : ${students[x]}`+"<br>")
}