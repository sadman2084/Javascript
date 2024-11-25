const user = { id: "1", name: "sadman" };
sessionStorage.setItem("user", JSON.stringify(user));

const userInfo = JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo);