const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const users = await response.json();
  return users;
};

fetchUsers()
  .then(users => console.log("users:", users))