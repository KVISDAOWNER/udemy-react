import { useRef } from "react";
import style from "./NewUserForm.module.css";
import Button from "./Button";

function NewUserForm(props) {
  const usernameRef = useRef();
  const ageRef = useRef();

  function submitHandler(event) {
    event.preventDefault(); //dont reload page on form submit - this is otherwise default html behavior

		const enteredName = usernameRef.current.value;
		const enteredAge = ageRef.current.value;

    const userData = {
      username: enteredName,
      age: enteredAge,
    };


    props.onFormSubmit(userData);
		usernameRef.current.value = ''; //here we directly modify DOM element. Is ok practice with this minor "modification"
		ageRef.current.value = '';
	}

  return (
    <div className={style["new-user"]}>
      <form onSubmit={submitHandler}>
        <div className={style["new-user__controls"]}>
          <div className={style["new-user__control"]}>
            <label>Username</label>
            <input type="text" ref={usernameRef}></input>
          </div>
          <div className={style["new-user__control"]}>
            <label>Age (Years)</label>
            <input type="text" ref={ageRef}></input>
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
