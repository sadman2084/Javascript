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

sendData();
