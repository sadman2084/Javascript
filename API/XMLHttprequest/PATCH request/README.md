# XMLHttpRequest PATCH Request Example

This repository demonstrates how to make a `PATCH` request using the `XMLHttpRequest` object in JavaScript. The code sends a partial update to a post in the JSONPlaceholder API by modifying the `title` field of a specific post.

## Overview

This code sends an HTTP `PATCH` request to the endpoint `https://jsonplaceholder.typicode.com/posts/12` to partially update a post with ID 12. The request modifies only the `title` of the post (as opposed to a full replacement with `PUT`). The `XMLHttpRequest` object is used to make the request asynchronously. Upon receiving a response from the server, the data is parsed from JSON format and logged to the console.

### Key Concepts:
- **XMLHttpRequest**: A browser API that allows JavaScript to send HTTP requests and handle responses asynchronously.
- **HTTP PATCH Request**: A method used to partially update a resource on the server. It only requires the fields that need to be changed (as opposed to `PUT`, which replaces the entire resource).
- **JSONPlaceholder API**: A free online REST API that provides fake data for testing and prototyping. In this example, we are updating a post's `title`.

## Code Explanation

The code provided does the following:

1. **Create a New XMLHttpRequest Object**:
   - A new instance of `XMLHttpRequest` is created to make the request.

2. **Set Up the PATCH Request**:
   - The `xhr.open()` method is used to configure the request with the HTTP method `'PATCH'` and the URL `https://jsonplaceholder.typicode.com/posts/12`. This URL represents the post with ID 12, which is being partially updated.
   
3. **Data to Send**:
   - The `data` object contains only the `title` field. This is the field that will be updated in the post, and no other fields need to be sent.

4. **Define the onload Callback**:
   - The `xhr.onload` function is executed when the request is successfully completed. The response data is retrieved using `xhr.responseText`, then parsed from JSON format using `JSON.parse()` and logged to the console.

5. **Define the onerror Callback**:
   - If an error occurs during the request (e.g., a network failure or invalid URL), the `xhr.onerror` callback logs an error message to the console.

6. **Send the Request**:
   - The `xhr.send()` method sends the `PATCH` request to the server, including the `data` object as a JSON string. The request header `Content-Type: application/json` is set to indicate that the data being sent is in JSON format.

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
       <title>XMLHttpRequest PATCH Example</title>
   </head>
   <body>
       <h1>XMLHttpRequest PATCH Example</h1>
       <button onclick="sendData()">Update Post</button>

       <script>
           const sendData = () => {
               const xhr = new XMLHttpRequest();

               xhr.open('PATCH', 'https://jsonplaceholder.typicode.com/posts/12', true); // `true` for asynchronous request

               // Data to send (partial update)
               const data = {
                   title: 'cat',  // Only updating the title
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

 Response

The response from the `PATCH` request will be the updated post, with only the `title` field modified. An example response might look like this:

```json
{
    "userId": 1,
    "id": 12,
    "title": "cat",
    "body": "laboriosam mollitia et enim quasi est quidem magnam voluptate vitae"
}
```

The `title` of the post has been updated to `"cat"`, while the other fields (`body`, `userId`, `id`) remain unchanged.

## Conclusion

This example demonstrates how to send a `PATCH` request using the `XMLHttpRequest` object in JavaScript to partially update a resource on a server. It makes a request to the JSONPlaceholder API, updates the `title` of the post with ID 12, and logs the updated post data to the console.

