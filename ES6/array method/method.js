let numbers = [5, 55, 30, 40, 50];

const evenNumbers = (value, index, array) => {
    if (value % 2 === 0) {
        return value;
    }
};

let newNumbers = numbers.find(evenNumbers);

document.write(newNumbers + "<br>");

document.write(numbers.findIndex(evenNumbers) + "<br>");

const students = [
    {
        id: 1,
        gpa: 3.5,
    },
    {
        id: 2,
        gpa: 2,
    },
    {
        id: 3,
        gpa: 4.5,
    },
    { 
        id: 4,
        gpa: 5,
    },
];

document.write(students.find((x) => x.gpa > 4) + "<br>");