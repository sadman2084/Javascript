const makeRequest = async (config) => {
    return await axios(config);
  };
  


  
  const deleteData = () => {
    makeRequest({
      url: "https://jsonplaceholder.typicode.com/posts/1",
      method: "delete",
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  deleteData();
  