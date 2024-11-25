//to get full data from the server,we use GET
const getData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');//to open the request


    //to send the data
    xhr.onload = () => {
        let data = xhr.response;
        //  console.log(data);//the data will be shown in json format in console
        console.log(JSON.parse(data));//the orginal data.the data will be null becuase there is no data
    }
    //to hendle error
    xhr.onerror = () => {
        console.log("there is a error");//this messege will noi be shown,make the link faulty,you will see the messege
    }


    xhr.send();//to send the request
}

getData();