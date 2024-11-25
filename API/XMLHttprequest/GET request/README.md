# XMLHttpRequest GET Request Example

This repository demonstrates how to make a `GET` request using the `XMLHttpRequest` object in JavaScript. The code retrieves data from the JSONPlaceholder API and logs the response to the console.

## Overview

This code sends an HTTP `GET` request to the endpoint `https://jsonplaceholder.typicode.com/posts` to retrieve a list of posts. The `XMLHttpRequest` object is used to make the request asynchronously. Upon receiving a response from the server, the data is parsed from JSON format and logged to the console.

### Key Concepts:
- **XMLHttpRequest**: A browser API that allows JavaScript to send HTTP requests and handle responses asynchronously.
- **HTTP GET Request**: The most common HTTP method used to retrieve data from a server. In this case, we are retrieving data from the JSONPlaceholder API.
- **JSONPlaceholder API**: A free online REST API that provides fake data for testing and prototyping.

## Code Explanation

The code provided does the following:

1. **Create a New XMLHttpRequest Object**:
   - A new instance of `XMLHttpRequest` is created to make the request.

2. **Set Up the GET Request**:
   - The `xhr.open()` method is used to configure the request with the HTTP method `'GET'` and the URL `https://jsonplaceholder.typicode.com/posts`. This will fetch a list of posts.

3. **Define the onload Callback**:
   - The `xhr.onload` function is executed when the request is successfully completed. The response data is retrieved using `xhr.response`, then parsed from JSON format using `JSON.parse()` and logged to the console.

4. **Define the onerror Callback**:
   - If an error occurs during the request (e.g., a network failure or invalid URL), the `xhr.onerror` callback logs an error message to the console.

5. **Send the Request**:
   - The `xhr.send()` method sends the `GET` request to the server. Since a `GET` request does not require a body, no data is passed with the `send()` method.

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
       <title>XMLHttpRequest GET Example</title>
   </head>
   <body>
       <h1>XMLHttpRequest GET Example</h1>
       <button onclick="getData()">Get Posts</button>

       <script>
           const getData = () => {
               const xhr = new XMLHttpRequest();
               xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');//to open the request

               //to send the data
               xhr.onload = () => {
                   let data = xhr.response;
                   console.log(JSON.parse(data));//the original data will be shown in JSON format
               };

               //to handle error
               xhr.onerror = () => {
                   console.log("There is an error with the request");
               };

               xhr.send();//to send the request
           };
       </script>
   </body>
   </html>
   ```

   - Save the file.


## Response

The response from the `GET` request will be a list of posts in JSON format. An example response might look like this:

```json
[
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit..."
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil..."
    }
    // more posts...
]
```

The code parses this data and logs it to the console for further inspection or use.

## Conclusion

This example demonstrates how to send a `GET` request using the `XMLHttpRequest` object in JavaScript to retrieve data from a server. It makes a request to the JSONPlaceholder API, retrieves a list of posts, and logs the data in the console.
