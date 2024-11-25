// method for making HTTP Request
const makeRequest = async (url, config) => {
    const res = await fetch(url, config);
    if (!res.ok) {
        const message = `Error : ${res.status}`;
        throw new Error(message);
    }
    const data = await res.json();
    return data;
};


const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts")
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};

getData();