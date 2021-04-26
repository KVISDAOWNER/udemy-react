import { useState } from "react";
import style from "./NewUserForm.module.css";

function NewUserForm(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);

  function usernameChangedHandler(event) {
    setUsername(event.target.value);
    setIsUsernameValid(true);
  }

  function ageChangedHandler(event) {
    setAge(event.target.value);
    setIsAgeValid(true);
  }

  function submitHandler(event) {
    event.preventDefault(); //dont reload page on form submit - this is otherwise default html behavior

    if (username === "") setIsUsernameValid(false);
    if (age === "") setIsAgeValid(false);

    const userData = {
      id: username,
      username: username,
      age: age,
    };

    setUsername("");
    setAge("");

    console.log(userData);
  }

  return (
    <div className={style["new-user"]}>
      <form onSubmit={submitHandler}>
        <div className={style["new-user__controls"]}>
          <div
            className={`${style["new-user__control"]} ${
              !isUsernameValid && style.invalid
            }`}
          >
            <label>Username</label>
            <input
              type="text"
              onChange={usernameChangedHandler}
              value={username}
            ></input>
          </div>
          <div
            className={`${style["new-user__control"]} ${
              !isAgeValid && style.invalid
            }`}
          >
            <label>Age (Years)</label>
            <input type="text" onChange={ageChangedHandler} value={age}></input>
          </div>
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
}

export default NewUserForm;
