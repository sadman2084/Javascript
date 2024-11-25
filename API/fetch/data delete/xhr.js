const makeRequest = async (url, config) => {
    const res = await fetch(url, config);
    if (!res.ok) {
      const message = `Error : ${res.status}`;
      throw new Error(message);
    }
    const data = await res.json();
    return data;
  };
  
  const deleteData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  
  deleteData();
  