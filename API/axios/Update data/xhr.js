const makeRequest = async (config) => {
    return await axios(config);
  };


  
const updateData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1",
    method: "put",
    data: JSON.stringify({
      id: 1,
      title: "fooma",
      body: "barma",
      userId: 1,
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};
updateData();