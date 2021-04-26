import NewUserForm from "./NewUserForm";
import Card from "./Card";

function NewUser(props) {

	function newUserHandler(user){
		props.onNewUser(user);
	}
  return (
    <Card>
      <NewUserForm onFormSubmit={newUserHandler} />
    </Card>
  );
}

export default NewUser;
