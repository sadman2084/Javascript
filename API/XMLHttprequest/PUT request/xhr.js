//to update full data,we use PUT
const sendData = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('PUT', 'https://jsonplaceholder.typicode.com/posts/12', true); // `true` for asynchronous request

    // Data to send
    const data = {
        title: 'foo',
        body: 'bar',
        userId: 17,
    };


    xhr.onload = () => {
        let responseData = xhr.responseText;
        console.log(JSON.parse(responseData));
    };

    xhr.onerror = () => {
        console.log("There is an error with the request");
    };

    // Send the request with the data
    xhr.setRequestHeader('Content-Type', 'application/json');  // Set the proper Content-Type header
    xhr.send(JSON.stringify(data));  // Send the data as a JSON string
};

sendData();
