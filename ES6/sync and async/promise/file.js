document.write("starting the program" + "<br>");

const taskOne = (personName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        personName: personName,
      });
    }, 1000); 
  });
};

const taskTwo = (person) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Details of ${person.personName}`);
      resolve({
        age: 10,
        phone: 10344,
      });
    }, 2000);
  });
};

const taskThree = () => {
  const task3Text = "Completed task 3";
  return Promise.resolve(task3Text);
};

const taskFour = () => {
  const task4Text = "Completed task 4";
  return Promise.resolve(task4Text);
};

const runTasksSequentially = async () => {
  try {
    const person = await taskOne("sadman");
    const details = await taskTwo(person);
    document.write(JSON.stringify(details) + "<br>");
    
    const result3 = await taskThree();
    const result4 = await taskFour();
    
    document.write(result3 + "<br>"); 
    document.write(result4 + "<br>"); 
  } catch (error) {
    console.error("Error:", error);
  }
};

Promise.all([taskOne("sadman"), taskTwo({ personName: "sadman" }), taskThree(), taskFour()])
  .then(([res1, res2, res3, res4]) => {
    document.write("Results from Promise.all:" + "<br>");
    document.write(JSON.stringify(res1) + "<br>"); 
    document.write(JSON.stringify(res2) + "<br>"); 
    document.write(res3 + "<br>"); 
    document.write(res4 + "<br>"); 
  })
  .catch((error) => {
    console.error("Error in Promise.all:", error);
  });

Promise.race([taskOne("sadman"), taskTwo({ personName: "sadman" })])
  .then((result) => {
    document.write("First resolved task in Promise.race: " + JSON.stringify(result) + "<br>");
  })
  .catch((error) => {
    console.error("Error in Promise.race:", error);
  });

runTasksSequentially(); 

document.write("ending the program" + "<br>");


// promise, promise chaining, async await
console.log("welcome");

const taskOneSeq = () => {
  return new Promise((resolve, reject) => {
    resolve("task 1 is completed");
  });
};
const taskTwoSeq = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task 2 is completed");
    }, 2000);
  });
};
const taskThreeSeq = () => {
  return new Promise((resolve, reject) => {
    reject("task 3 is not completed");
  });
};
const taskFourSeq = () => {
  return new Promise((resolve, reject) => {
    resolve("task 4 is completed");
  });
};

const callAllTasks = async () => {
  try {
    const t1 = await taskOneSeq();
    console.log(t1);
    const t2 = await taskTwoSeq();
    console.log(t2);
    const t3 = await taskThreeSeq();
    console.log(t3);
    const t4 = await taskFourSeq();
    console.log(t4);
  } catch (e) {
    console.log(e);
  }
};

callAllTasks();

console.log("bye");
