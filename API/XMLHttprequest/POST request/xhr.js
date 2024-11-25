//to upload data,we use POST
const sendData = () => {
    const xhr = new XMLHttpRequest();
    

    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true); // `true` is for asynchronous request

    //data to send
    const data = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };

    // Set up the onload function to handle the response
    xhr.onload = () => {
        let responseData = xhr.responseText;
        console.log(JSON.parse(responseData));
    };

    // Set up the onerror function to handle request errors
    xhr.onerror = () => {
        console.log("There is an error with the request");
    };

    // Send the request with the data
    xhr.setRequestHeader('Content-Type', 'application/json');  // Set the proper Content-Type header
    xhr.send(JSON.stringify(data));  // Send the data as a JSON string
};

sendData();
