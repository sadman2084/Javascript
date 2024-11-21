
# Form Submission Example

This project demonstrates how to handle form submission using JavaScript. Upon submitting the form, it collects user input, prevents the default form submission behavior, and displays the submitted data on the page using `document.write()`.

## Features:
- Collects **name**, **email**, and **password** from the user.
- Displays the submitted data directly on the page after the form is submitted.
- Resets the form fields after submission.

## Code Explanation

### 1. **HTML Structure**:
The HTML contains a simple form with three input fields: **name**, **email**, and **password**. When the form is submitted, the data entered in these fields will be displayed on the page.

```html
<form>
    <div>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
    </div>
    <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
    </div>
    <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
    </div>
    <button type="submit">Submit</button>
</form>
```

### 2. **JavaScript**:

#### **Element Selection**:
We use `document.querySelector()` to select the form and the individual input fields (name, email, and password) within the form.

```javascript
const form = document.querySelector("form");
const name = form.querySelector("div #name");  // Selecting the name input field
const email = form.querySelector("div #email"); // Selecting the email input field
const password = form.querySelector("div #password"); // Selecting the password input field
```

#### **Form Submission Event Listener**:
We add an event listener to the form that listens for the `submit` event. When the form is submitted, the `formHandler()` function is called.

```javascript
form.addEventListener("submit", formHandler);
```

#### **Form Handler Function**:
The `formHandler()` function prevents the default form submission behavior (which would cause the page to reload). Instead, it collects the data from the form fields and then writes the submitted information to the page using `document.write()`.

```javascript
function formHandler(e) {
  e.preventDefault(); // Prevents the form from submitting and refreshing the page
  
  const userInfo = {
    name: name.value,       // Gets the name input value
    email: email.value,     // Gets the email input value
    password: password.value, // Gets the password input value
  };

  // Using document.write() to display the information on the page
  document.write("<h2>Form Submitted</h2>");
  document.write("<p>Name: " + userInfo.name + "</p>");
  document.write("<p>Email: " + userInfo.email + "</p>");
  document.write("<p>Password: " + userInfo.password + "</p>");
  
  // Clear the form inputs after submission
  name.value = "";
  email.value = "";
  password.value = "";
}
```

### 3. **What Happens When the Form is Submitted**:
- When the user fills in the form and clicks the "Submit" button:
  1. The `formHandler` function is triggered.
  2. The form's default behavior is prevented (no page refresh).
  3. The values entered into the **name**, **email**, and **password** fields are gathered.
  4. The values are displayed on the page using `document.write()`:
     - It writes an `<h2>` header saying "Form Submitted".
     - It displays the name, email, and password entered by the user in `<p>` tags.
  5. The input fields are cleared after the form is submitted.

### 4. **Using `document.write()`**:
In this example, `document.write()` is used to dynamically display the submitted data. However, **`document.write()`** is not recommended for dynamic content updates after the page has loaded, as it will overwrite the entire document content. Instead, it's better to use other DOM manipulation methods such as `innerHTML` or `textContent` for updating specific parts of the page.

### Example Output:
After submitting the form, if the user enters the following information:
- Name: **John Doe**
- Email: **john@example.com**
- Password: **123456**

The page will display:
```
Form Submitted
Name: John Doe
Email: john@example.com
Password: 123456
```


