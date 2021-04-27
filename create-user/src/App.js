import { useState } from "react";
import NewUser from "./components/NewUser";
import Users from "./components/Users";

function App() {
  const defaultUsers = [
    { username: "kris271c", age: 23 },
    { username: "jacob", age: 24 },
  ];

  const [users, setUsers] = useState(defaultUsers);

  function addUserHandler(user) {
    setUsers((oldUsers) => {
      return [user, ...oldUsers];
    });
  }

  return (
    <div>
      <NewUser onNewUser={addUserHandler} />
      <Users users={users} />
    </div>
  );
}

export default App;
