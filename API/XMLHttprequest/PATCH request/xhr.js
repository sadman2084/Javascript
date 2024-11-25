//to update partial data,we use PATCH
const sendData = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('PATCH', 'https://jsonplaceholder.typicode.com/posts/12', true); // `true` for asynchronous request

    // Data to send (partial update)
    const data = {
        title: 'cat',
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

sendData();
