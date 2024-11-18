## JavaScript String Library Functions

This example demonstrates various **string manipulation methods** in JavaScript. Below is a detailed explanation of the functions used:

---

### **Code Overview**

#### **1. `length` Property**
```javascript
var name = "Hero Alom ";
var len = name.length;
document.write("The length is " + len + "<br>");
```
- **Description**: The `length` property returns the total number of characters in a string, including spaces.
- **Output**: 
  - For the string `"Hero Alom "`, `length` returns **10**.

---

#### **2. `charAt(index)`**
```javascript
document.write("Character at index 2 is " + name.charAt(2) + "<br>");
```
- **Description**: The `charAt(index)` method returns the character at the specified position (index starts from 0).
- **Example**: 
  - For the string `"Hero Alom "`, `charAt(2)` returns **"r"**.

---

#### **3. `toLowerCase()`**
```javascript
var t = "paTuAKHalI";
document.write("String in lower case: " + t.toLowerCase() + "<br>");
```
- **Description**: Converts all characters in the string to **lowercase**.
- **Example**:
  - `"paTuAKHalI".toLowerCase()` returns **"patuakhali"**.

---

#### **4. `toUpperCase()`**
```javascript
document.write("String in upper case: " + t.toUpperCase() + "<br>");
```
- **Description**: Converts all characters in the string to **uppercase**.
- **Example**:
  - `"paTuAKHalI".toUpperCase()` returns **"PATUAKHALI"**.

---

#### **5. `concat()`**
```javascript
document.write("After concatenating: " + name.concat(t) + "<br>");
```
- **Description**: Combines two or more strings into one.
- **Example**:
  - `"Hero Alom ".concat("paTuAKHalI")` returns **"Hero Alom paTuAKHalI"**.

---

#### **6. `slice(startIndex, endIndex)`**
```javascript
document.write("After slicing from index 0 to 2: " + t.slice(0, 3) + "<br>");
```
- **Description**: Extracts a portion of the string from `startIndex` to `endIndex` (excluding `endIndex`).
- **Example**:
  - For `"paTuAKHalI"`, `slice(0, 3)` returns **"paT"**.

---

### **Key String Functions Used**

| **Function/Property** | **Description**                                   | **Example**                     | **Output**              |
|------------------------|---------------------------------------------------|----------------------------------|-------------------------|
| `length`              | Returns the number of characters in a string.     | `"Hero Alom ".length`           | `10`                   |
| `charAt(index)`        | Returns the character at the specified index.     | `"Hero Alom ".charAt(2)`        | `"r"`                  |
| `toLowerCase()`        | Converts the string to lowercase.                 | `"paTuAKHalI".toLowerCase()`    | `"patuakhali"`         |
| `toUpperCase()`        | Converts the string to uppercase.                 | `"paTuAKHalI".toUpperCase()`    | `"PATUAKHALI"`         |
| `concat()`             | Concatenates two or more strings.                 | `"Hero Alom ".concat("paTuAKHalI")` | `"Hero Alom paTuAKHalI"` |
| `slice(start, end)`    | Extracts a portion of the string.                 | `"paTuAKHalI".slice(0, 3)`      | `"paT"`                |

---

### **How These Functions Work Together**
These functions help manipulate and process strings for various purposes:
- Finding string length (`length`).
- Extracting specific characters (`charAt`).
- Changing letter case (`toLowerCase`, `toUpperCase`).
- Combining strings (`concat`).
- Extracting a portion of a string (`slice`).

---
