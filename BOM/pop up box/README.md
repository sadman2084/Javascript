# JavaScript Functions Example

## Description

This project contains two simple JavaScript functions:

1. **deleteSomething()** - A function that displays a confirmation prompt asking the user if they want to delete something. Based on the user’s response, it displays either "deleted" or "not deleted".
2. **welcomeMessage()** - A function that asks the user to enter their name via a prompt. It then displays a welcome message on the webpage. If the user enters no name or cancels the prompt, it displays "no name found".

---

## Code Breakdown

### 1. `deleteSomething()` Function

- **Purpose**: The function prompts the user with a confirmation message to confirm if they want to delete something.
- **Working**:
  - The `confirm()` function is called, which shows a dialog box with "OK" and "Cancel" buttons.
  - If the user clicks "OK" (confirm), it displays "deleted" on the page.
  - If the user clicks "Cancel" (deny), it displays "not deleted" on the page.
  
```javascript
function deleteSomething() {
  let value = confirm("Do you want to delete?");
  if (value) {
    document.write("deleted");
  } else {
    document.write("not deleted");
  }
}
deleteSomething();
```

---

### 2. `welcomeMessage()` Function

- **Purpose**: This function prompts the user for their name and displays a greeting message.
- **Working**:
  - The `prompt()` function is used to ask for the user’s name.
  - If the user enters a name, the page displays "welcome [name]" in an `h1` element.
  - If the user does not enter a name or cancels the prompt, the page displays "no name found".
  
```javascript
function welcomeMessage() {
    var h1 = document.createElement("h1");
    let text;
  
    var name = prompt("Enter your name: ");
    if (name == null || name == "") {
      text = "no name found";
    } else {
      text = "welcome " + name;
    }
    var textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}
  
welcomeMessage();
```

---

## Example Output

### `deleteSomething()` function output:
- If the user clicks **OK**, the page will display:  
  `"deleted"`
- If the user clicks **Cancel**, the page will display:  
  `"not deleted"`

### `welcomeMessage()` function output:
- If the user enters their name as **John**, the page will display:  
  `"welcome John"`
- If the user cancels the prompt or enters nothing, the page will display:  
  `"no name found"`

---

