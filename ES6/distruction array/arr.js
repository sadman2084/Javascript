
//array destructuring
let numbers = [10, 20, 30, 40, 50]
let [num1, num2, num3, num4, num5] = numbers;
document.write(numbers[0] +"<br>")
document.write(num1 +"<br>")
document.write(num2  +"<br>")

let [x, y, ...z] = numbers;
document.write(z)

//swapping variables
let m = 10, n = 5;
[m, n] = [n, m];
document.write(m  +"<br>");
document.write(n +"<br>");

const student2 = {
    id: 101,
    fullName: 'sadman',
    gpa: 3.92,
    languages: {
        native: 'Bangla',
        beginner: 'cat lamguage'
    }
}
let { fullName, gpa, languages } = student2
document.write(fullName+"<br>")
document.write(languages.native+"<br>")



const studentDetails = ({ firstName, roll, dob }) => {
    document.write(`${firstName} ${roll} ${dob}` +"<br>") 
}

const studentInfo = {
    dob: '15/05/02',
    roll: 20,
    firstName: 'sadman'
}

studentDetails(studentInfo)