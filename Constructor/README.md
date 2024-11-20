# Student Constructor Example

This repository contains a simple example of a JavaScript constructor function to create student objects.

## Description

The code demonstrates how to:
- Use a constructor function to define object properties.
- Create an object using the `new` keyword.
- Access object properties and display them on a web page.

## Code Overview

### Constructor Function
```javascript
function student(name, age, cpga, lang) {
  this.name = name;
  this.age = age;
  this.cpga = cpga;
  this.lang = lang;
}
```

### Example Object Creation
```javascript
var student1 = new student("sadman", 12, 3.1, ["bangla", "english"]);
```

### Output Properties
```javascript
document.write(student1.name + "<br>");
document.write(student1.age + "<br>");
document.write(student1.cpga + "<br>");
document.write(student1.lang + "<br>");
```

## Output
The script displays the following details in the browser:
- Name: `sadman`
- Age: `12`
- CPGA: `3.1`
- Languages: `bangla, english`
