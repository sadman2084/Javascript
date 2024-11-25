console.clear();

const makeRequest = async (config) => {
    return await axios(config);
};


const getData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts")
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
};
getData();