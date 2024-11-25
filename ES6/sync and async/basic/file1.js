
document.write("------------------------------------"  +"<br>");
document.write("Example of Synchronous programming"+"<br>");
document.write(`Task 1` +"<br>");
document.write(`Task 2`+"<br>");
document.write(`Task 3`+"<br>");
document.write(`Task 4`+"<br>");
document.write("<br>"+"------------------------------------\n\n");

document.write("Example of Asynchronous programming" +"<br>");
document.write(`Task 1`+"<br>");
setTimeout(() => {
  document.write(`Task 2`+"<br>");
}, 2000);
document.write(`Task 3`+"<br>");
document.write(`Task 4`+"<br>");

const taskOne = () => {
  document.write(`Task 1`+"<br>");
};

const taskTwo = () => {
  setTimeout(() => {
    document.write(`Task 2`+"<br>");
    document.write("------------------------------------");
  }, 2000);
};

const taskThree = () => {
  document.write(`Task 3`+"<br>");
};
const taskFour = () => {
  document.write(`Task 4`+"<br>");
};

taskOne();
taskTwo();
taskThree();
taskFour();