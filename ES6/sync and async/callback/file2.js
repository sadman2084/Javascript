const printSquare = (x) => {
    document.write(`The square of ${x} is ${x * x}` + "<br>");
  };
  
  const square = printSquare;
  square(10);
  
  const higherOrderFunction = (y, callback) => {
    callback(y);
  };
  
  higherOrderFunction(5, square);
  
  const taskOne = async () => {
    document.write(`Task 1` + "<br>");
  };
  
  const taskTwo = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        document.write(`Task 2` + "<br>");
        resolve();
      }, 2000);
    });
  };
  
  const taskThree = async () => {
    document.write(`Task 3` + "<br>");
  };
  
  const taskFour = () => {
    document.write(`Task 4` + "<br>");
  };
  
  const runTasks = async () => {
    await taskOne();
    await taskTwo();
    await taskThree();
    taskFour();
  };
  
  runTasks();
  
  document.getElementById('button').addEventListener('click', () => {
    alert('Button clicked!');
  });
  
  window.addEventListener('load', () => {
    document.write('Window loaded, ready to perform actions.');
  });
  
  setTimeout(() => {
    document.write('Executed after 2 seconds.');
  }, 2000);
  