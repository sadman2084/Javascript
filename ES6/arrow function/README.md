# JavaScript: Arrow Functions Example

## Description

This project demonstrates the use of **arrow functions** in JavaScript and showcases various scenarios such as parameter usage, returning values, and working with functions like `map()` and `filter()`. 

### Topics Covered:

- Basic arrow function syntax
- Returning values with arrow functions
- Arrow functions with parameters
- Using arrow functions with `map()` and `filter()`

---

## Code Breakdown

### Example Code

```javascript
// demo1 - must use parenthesis for no parameters, but for one parameter it's optional
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
```

---

## Explanation:

### 1. **Basic Arrow Function Syntax**
   - **Without Parameters**: Parentheses are required when there are no parameters (`display1`), but for one parameter, parentheses are optional (`display2`).
   - **Example**: `const display2 = () => {}` where parentheses are not needed for one parameter.

### 2. **Single Statement in Arrow Functions**
   - **No Curly Braces Needed**: When a function only contains one statement, curly braces are not required. 
   - **Example**: `const display4 = () => document.write("cattto zindabad 4"+"<br>");`

### 3. **Returning Values with Arrow Functions**
   - **No Curly Braces for Return**: In arrow functions, if the function returns a value directly, you can omit curly braces.
   - **Example**: `const display6 = () => "cattto zindabad 6";`

### 4. **Parameters in Arrow Functions**
   - Arrow functions can accept multiple parameters. If only one parameter is provided, parentheses can be omitted.
   - **Example**: `const add2 = (x, y) => x + y;` where `x` and `y` are the parameters.

### 5. **Arrow Functions with `map()` and `filter()`**
   - **Traditional Function**: Using `filter()` and `map()` with a traditional function to return student names whose GPA is greater than 3.
   - **Arrow Function**: Using `filter()` and `map()` with an arrow function to achieve the same result more concisely.

---

## How the Code Works

1. **Arrow Function Syntax**:
   - **Display Functions**: `display1()` uses a traditional function, while `display2()` is defined as an arrow function.
   - **Returning Values**: `display5()` is a traditional function that returns a string, while `display6()` uses an arrow function for the same purpose.

2. **Adding Values**: 
   - `add1(x, y)` and `add2(x, y)` both return the sum of two values, but the arrow function (`add2`) is more concise.

3. **Filter and Map**:
   - **Traditional Function**: The `studentsName1()` function filters students with a GPA greater than 3 and returns their names using a traditional function.
   - **Arrow Function**: The `studentsName2()` function performs the same task but in a more concise way using arrow functions.

---

## Output

The output of this code will be displayed on the webpage using `document.write()`.

1. **Displaying Text**: 
   ```
   cattto zindabad  1
   cattto zindabad  2
   cattto zindabad  3
   cattto zindabad  4
   cattto zindabad  5
   cattto zindabad  6
   ```

2. **Adding Numbers**: 
   ```
   30
   50
   ```

3. **Filtering and Mapping Students**: 
   ```
   ['cat', 'dog', 'Limon']
   ```

---
### Example HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arrow Functions Example</title>
</head>
<body>
  <script src="script.js"></script>
</body>
</html>
```

---

