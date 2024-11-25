const makeRequest = async (url, method, data) => {
    try {
      const result = await $.ajax({
        url: url,
        method: method,
        data: JSON.stringify(data), 
        contentType: "application/json", 
        dataType: "json", 
      });
      return result;
    } catch (err) {
      console.log(err);
    }
  };
  
  const createData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PUT", {
      id: 1,
      title: "fooma",
      body: "barma",
      userId: 1,
    }).then((res) => console.log(res));
  };
  
  createData();
  