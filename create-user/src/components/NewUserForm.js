import { useState } from "react";
import style from "./NewUserForm.module.css";
import Button from "./Button";

function NewUserForm(props) {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  function usernameChangedHandler(event) {
    setUsername(event.target.value);
  }

  function ageChangedHandler(event) {
    setAge(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault(); //dont reload page on form submit - this is otherwise default html behavior

    const userData = {
      username: username,
      age: age,
    };

    setUsername("");
    setAge("");

    props.onFormSubmit(userData);
  }

  return (
    <div className={style["new-user"]}>
      <form onSubmit={submitHandler}>
        <div className={style["new-user__controls"]}>
          <div className={style["new-user__control"]}>
            <label>Username</label>
            <input
              type="text"
              onChange={usernameChangedHandler}
              value={username}
            ></input>
          </div>
          <div className={style["new-user__control"]}>
            <label>Age (Years)</label>
            <input type="text" onChange={ageChangedHandler} value={age}></input>
          </div>
        </div>
        <div>
          <Button type="submit">Add User</Button>
        </div>
      </form>
    </div>
  );
}

export default NewUserForm;
