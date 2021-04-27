import NewUserForm from "./NewUserForm";
import Card from "./Card";
import ErrorModal from "./ErrorModal";
import { useState } from "react";

function NewUser(props) {
  const [error, setError] = useState("");

  function newUserHandler(user) {
    if (user.username.trim().length === 0) {
      setError({
        title: "Invalid username",
        message: "Please enter a nonempty username.",
      });
      return;
    }
    if (
      user.age.trim().length === 0 ||
      isNaN(user.age.trim()) ||
      +user.age < 1
    ) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onNewUser(user);
  }

  function closeError() {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={() => setError("")}
        ></ErrorModal>
      )}
      <Card>
        <NewUserForm onFormSubmit={newUserHandler} />
      </Card>
    </div>
  );
}

export default NewUser;
