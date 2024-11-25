# XMLHttpRequest PUT Request Example

This repository demonstrates how to make a `PUT` request using the `XMLHttpRequest` object in JavaScript. The code updates the data of a specific post on the JSONPlaceholder API.

## Overview

This code sends an HTTP `PUT` request to the endpoint `https://jsonplaceholder.typicode.com/posts/12` to update an existing post with ID 12. The request updates the entire post data (as opposed to a `PATCH` request, which only modifies certain fields). The `XMLHttpRequest` object is used to make the request asynchronously. Upon receiving the response, the data is parsed from JSON format and logged to the console.

### Key Concepts:
- **XMLHttpRequest**: A browser API used to send HTTP requests and handle responses asynchronously.
- **HTTP PUT Request**: The HTTP method used to update an existing resource with new data. A `PUT` request replaces the entire resource with the provided data.
- **JSONPlaceholder API**: A free online REST API that provides fake data for testing and prototyping.

## Code Explanation

The code provided does the following:

1. **Create a New XMLHttpRequest Object**:
   - A new instance of `XMLHttpRequest` is created to handle the HTTP request.

2. **Set Up the PUT Request**:
   - The `xhr.open()` method is used to configure the request with the HTTP method `'PUT'` and the URL `https://jsonplaceholder.typicode.com/posts/12`. This URL corresponds to the post with ID 12, which is being updated.
   
3. **Data to Send**:
   - The `data` object contains the `title`, `body`, and `userId` fields, representing the updated content of the post.
   
4. **Define the onload Callback**:
   - The `xhr.onload` function is triggered when the request completes successfully. The response data is retrieved using `xhr.responseText`, parsed from JSON format using `JSON.parse()`, and logged to the console.

5. **Define the onerror Callback**:
   - If an error occurs during the request (e.g., network failure or an invalid URL), the `xhr.onerror` callback logs an error message to the console.

6. **Send the Request**:
   - The `xhr.send()` method sends the `PUT` request to the server, including the `data` object serialized into a JSON string using `JSON.stringify()`. The request header `Content-Type: application/json` is set to indicate that the data being sent is in JSON format.

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
       <title>XMLHttpRequest PUT Example</title>
   </head>
   <body>
       <h1>XMLHttpRequest PUT Example</h1>
       <button onclick="sendData()">Update Post</button>

       <script>
           const sendData = () => {
               const xhr = new XMLHttpRequest();

               xhr.open('PUT', 'https://jsonplaceholder.typicode.com/posts/12', true); // `true` for asynchronous request

               // Data to send
               const data = {
                   title: 'foo',   // New title
                   body: 'bar',    // New body content
                   userId: 17,     // Updated user ID
               };

               xhr.onload = () => {
                   let responseData = xhr.responseText;
                   console.log(JSON.parse(responseData));  // Log the parsed JSON response
               };

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

The response from the `PUT` request will contain the updated post data, including the `id` that was assigned by the server. An example response might look like this:

```json
{
    "title": "foo",
    "body": "bar",
    "userId": 17,
    "id": 12
}
```

In this example, the entire post with `id: 12` is updated, and the server returns the updated post, which now includes the new `title`, `body`, and `userId`.

## Conclusion

This example demonstrates how to send a `PUT` request using the `XMLHttpRequest` object in JavaScript to fully update a resource on a server. It makes a request to the JSONPlaceholder API, updates the post with ID 12, and logs the updated post data to the console.

