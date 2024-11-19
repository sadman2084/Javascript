# **Prompt Input and Conversion Example**

### **Description**
This is a simple JavaScript program that demonstrates how to:
1. Take input from the user using the `prompt()` function.
2. Display the input as a string.
3. Convert the string input into an integer using `parseInt()` and display the result.

---

### **Features**
- Accepts user input via a browser's prompt dialog box.
- Converts the input string to an integer (if valid).
- Displays the results on the webpage.

---

### **How to Use**
1. Clone or download this repository.
2. Include the JavaScript code in an HTML file inside `<script>` tags.
3. Open the HTML file in a web browser.
4. Follow the steps:
   - A prompt box will appear asking for a name or value.
   - Enter any value (text or number).
   - The input and its integer conversion (if valid) will be displayed on the webpage.

---

### **Code Explanation**
1. **Prompt for Input:**
   ```javascript
   var name = prompt("Enter the name");
   ```
   - Displays a dialog box to accept input from the user.  
   - The entered value is stored in the variable `name` as a string.

2. **Display String Value:**
   ```javascript
   document.write("As string: " + name + "<br>");
   ```
   - Displays the string value of `name` on the webpage.

3. **Convert to Integer:**
   ```javascript
   name = parseInt(name, 10);
   ```
   - Converts the string `name` to an integer in base 10.
   - If the string cannot be converted to a number, the result will be `NaN` (Not a Number).

4. **Display Integer Value:**
   ```javascript
   document.write("As integer: " + name);
   ```
   - Displays the integer value of `name` on the webpage.

---

### **Sample Input/Output**
#### **Input 1:**  
- User enters: `123`  
**Output:**  
- As string: `123`  
- As integer: `123`  

#### **Input 2:**  
- User enters: `abc`  
**Output:**  
- As string: `abc`  
- As integer: `NaN`  

#### **Input 3:**  
- User enters: `123abc`  
**Output:**  
- As string: `123abc`  
- As integer: `123`  

---

### **Notes**
- The `parseInt()` function only works correctly if the input starts with a numeric value.
- If the input is purely non-numeric, the output will show `NaN` for the integer conversion.

---
