# JavaScript String Methods: `startsWith()`, `endsWith()`, and `includes()`

## Description

This code demonstrates the usage of the following JavaScript string methods:
- **`startsWith()`**: Checks if a string starts with a specific sequence of characters.
- **`endsWith()`**: Checks if a string ends with a specific sequence of characters.
- **`includes()`**: Checks if a string contains a specific sequence of characters.

These methods are commonly used for string manipulation and checking conditions in string data.

---

## Code Breakdown

### 1. **`startsWith()` Method**
The `startsWith()` method determines if a string starts with the characters of a specified string. It returns `true` if the string starts with the specified substring, and `false` otherwise.

```javascript
const message = "Today is friday";

document.write(message.startsWith("Today") +"<br>"); // Output: true
document.write(message.startsWith("Today", 0) +"<br>"); // Output: true
document.write(message.startsWith("Today", 5) +"<br>"); // Output: false
document.write(message.startsWith("today") +"<br>"); // Output: false
```

- **`message.startsWith("Today")`**: Checks if the string starts with the word `"Today"`. It returns `true`.
- **`message.startsWith("Today", 0)`**: The second argument (0) is the starting position, so it checks from the beginning, returning `true`.
- **`message.startsWith("Today", 5)`**: This checks starting from index 5 (the letter `"i"` in `"is"`), so it returns `false`.
- **`message.startsWith("today")`**: The method is case-sensitive, so `"Today"` does not match `"today"`, returning `false`.

### 2. **`endsWith()` Method**
The `endsWith()` method checks if a string ends with a specified sequence of characters. It returns `true` if the string ends with the given substring, otherwise `false`.

```javascript
document.write(message.endsWith("today") +"<br>"); // Output: false
document.write(message.endsWith("friday") +"<br>"); // Output: true
```

- **`message.endsWith("today")`**: Since the string ends with `"friday"`, not `"today"`, it returns `false`.
- **`message.endsWith("friday")`**: The string ends with `"friday"`, so it returns `true`.

### 3. **`includes()` Method**
The `includes()` method checks if a string contains a specified sequence of characters. It returns `true` if the substring is found within the string, and `false` otherwise.

```javascript
document.write(message.includes("Today") +"<br>"); // Output: true
document.write(message.includes("is") +"<br>"); // Output: true
document.write(message.includes("that") +"<br>"); // Output: false
```

- **`message.includes("Today")`**: The substring `"Today"` is found at the start of the string, so it returns `true`.
- **`message.includes("is")`**: The substring `"is"` is found in the string, so it returns `true`.
- **`message.includes("that")`**: The substring `"that"` is not found in the string, so it returns `false`.

---

## Output

The output of the code will be displayed in the browser using `document.write()`. The expected output will be:

```
true
true
false
false
false
true
true
false
```

---

### Example HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript String Methods Example</title>
</head>
<body>
  <script src="script.js"></script>
</body>
</html>
```

---

