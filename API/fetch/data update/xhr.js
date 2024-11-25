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

const updateData = () => {
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      body: JSON.stringify({
        title: "foomaraarrara",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  
  updateData();