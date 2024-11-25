# XMLHttpRequest POST Request Example

This repository demonstrates how to make a `POST` request using the `XMLHttpRequest` object in JavaScript. The code uploads data to the JSONPlaceholder API and logs the server's response to the console.

## Overview

This code sends an HTTP `POST` request to the endpoint `https://jsonplaceholder.typicode.com/posts` to create a new post. The `XMLHttpRequest` object is used to make the request asynchronously. Upon receiving a response from the server, the data is parsed from JSON format and logged to the console.

### Key Concepts:
- **XMLHttpRequest**: A browser API that allows JavaScript to send HTTP requests and handle responses asynchronously.
- **HTTP POST Request**: The HTTP method used to send data to a server to create or update a resource. In this case, a new post is being created in the JSONPlaceholder API.
- **JSONPlaceholder API**: A free online REST API that provides fake data for testing and prototyping.

## Code Explanation

The code provided does the following:

1. **Create a New XMLHttpRequest Object**:
   - A new instance of `XMLHttpRequest` is created to handle the HTTP request.

2. **Set Up the POST Request**:
   - The `xhr.open()` method is used to configure the request with the HTTP method `'POST'` and the URL `https://jsonplaceholder.typicode.com/posts`. This URL is where new posts will be created.
   
3. **Data to Send**:
   - The `data` object contains the fields `title`, `body`, and `userId`, which represent the new post's content.
   
4. **Define the onload Callback**:
   - The `xhr.onload` function is executed when the request completes successfully. The response data is retrieved using `xhr.responseText`, then parsed from JSON format using `JSON.parse()` and logged to the console.

5. **Define the onerror Callback**:
   - If an error occurs during the request (e.g., network failure or invalid URL), the `xhr.onerror` callback logs an error message to the console.

6. **Send the Request**:
   - The `xhr.send()` method sends the `POST` request to the server with the `data` object, serialized into a JSON string using `JSON.stringify()`. The request header `Content-Type: application/json` is set to indicate that the data being sent is in JSON format.

## How to Run the Code

1. **Prerequisites**:
   - A modern web browser (e.g., Chrome, Firefox, or Safari).
   - A text editor or IDE to edit the JavaScript code.

2. **Steps**:
   - Open your favorite text editor (e.g., Visual Studio Code, Sublime Text).
   - Create a new file and name it `index.html`.
   - Copy and paste the following HTML and JavaScript code into the file:

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>XMLHttpRequest POST Example</title>
   </head>
   <body>
       <h1>XMLHttpRequest POST Example</h1>
       <button onclick="sendData()">Create Post</button>

       <script>
           const sendData = () => {
               const xhr = new XMLHttpRequest();

               xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true); // `true` for asynchronous request

               // Data to send
               const data = {
                   title: 'foo',
                   body: 'bar',
                   userId: 1,
               };

               // Set up the onload function to handle the response
               xhr.onload = () => {
                   let responseData = xhr.responseText;
                   console.log(JSON.parse(responseData));  // Log the parsed JSON response
               };

               // Set up the onerror function to handle request errors
               xhr.onerror = () => {
                   console.log("There is an error with the request");
               };

               // Send the request with the data
               xhr.setRequestHeader('Content-Type', 'application/json');  // Set the proper Content-Type header
               xhr.send(JSON.stringify(data));  // Send the data as a JSON string
           };
       </script>
   </body>
   </html>
   ```

   - Save the file.


## Response

The response from the `POST` request will contain the data of the newly created post, including the `id` that was assigned by the server. An example response might look like this:

```json
{
    "title": "foo",
    "body": "bar",
    "userId": 1,
    "id": 101
}
```

In this example, a new post with `title: "foo"`, `body: "bar"`, and `userId: 1` has been created, and the server has assigned it the ID `101`.

## Conclusion

This example demonstrates how to send a `POST` request using the `XMLHttpRequest` object in JavaScript to upload data to a server. It makes a request to the JSONPlaceholder API, creates a new post, and logs the server's response to the console.

