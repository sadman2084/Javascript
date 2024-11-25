# XMLHttpRequest DELETE Request Example

This repository demonstrates how to make a `DELETE` request using the `XMLHttpRequest` object in JavaScript. The code sends a `DELETE` request to the JSONPlaceholder API to delete a post with a specific ID (post ID 12).

## Overview

This code sends an HTTP `DELETE` request to the endpoint `https://jsonplaceholder.typicode.com/posts/12` to simulate the deletion of a post with ID 12. The `XMLHttpRequest` object is used to make the request, and upon successful completion, the response is logged to the console.

### Key Concepts:
- **XMLHttpRequest**: A browser API that allows JavaScript to send HTTP requests and handle responses asynchronously.
- **HTTP DELETE Request**: A method used to delete resources on a server. In this case, a post is being deleted.
- **JSONPlaceholder API**: A free online REST API that provi3. **Run the Code**:
   - Open the `index.html` file in your web browser by double-clicking it.
   - Click the "Delete Post" button to send the `DELETE` request.
   - Check your browser's developer console to see the response from the server.
des fake data for testing and prototyping. The `DELETE` request does not actually remove any real data but simulates the operation.

## Code Explanation

The code provided does the following:

1. **Create a New XMLHttpRequest Object**:
   - A new instance of `XMLHttpRequest` is created to make the request.

2. **Set Up the DELETE Request**:
   - The `xhr.open()` method is used to configure the request with the HTTP method `'DELETE'` and the URL `https://jsonplaceholder.typicode.com/posts/12`.
   - The third parameter `true` specifies that the request will be asynchronous.

3. **Define the onload Callback**:
   - The `xhr.onload` function is called when the request completes successfully.
   - The response from the server is logged to the console, simulating the deletion of the post.

4. **Define the onerror Callback**:
   - If there’s an error with the request, such as a network failure or invalid URL, the `xhr.onerror` callback will log an error message to the console.

5. **Send the Request**:
   - The `xhr.send()` method sends the DELETE request. Since `DELETE` requests don't typically include a body, no data is passed in the `send()` method.

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
       <title>XMLHttpRequest DELETE Example</title>
   </head>
   <body>
       <h1>XMLHttpRequest DELETE Example</h1>
       <button onclick="sendData()">Delete Post</button>

       <script>
           const sendData = () => {
               const xhr = new XMLHttpRequest();

               xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/12', true); // `true` for asynchronous request

               xhr.onload = () => {
                   let responseData = xhr.responseText;
                   console.log('Deleted:', responseData);
               };

               xhr.onerror = () => {
                   console.log("There is an error with the request");
               };

               xhr.send();
           };
       </script>
   </body>
   </html>
   ```

   - Save the file.

## Response

Since the `DELETE` request is being sent to the JSONPlaceholder API, the response will typically be a status message indicating that the operation was successful. In the case of `JSONPlaceholder`, the API does not really delete the post but simulates the operation, so you might see a message like:

```json
"{}"
```

This indicates that the server processed the `DELETE` request successfully but did not return any content (as expected from a `DELETE` request).

## Conclusion

This example demonstrates how to send a `DELETE` request using the `XMLHttpRequest` object in JavaScript. It simulates the deletion of a resource (in this case, a post with ID 12) from a remote server. This code can be easily adapted to work with real APIs that support `DELETE` requests.

