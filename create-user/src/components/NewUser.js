import NewUserForm from "./NewUserForm";
import Card from "./Card";
import ErrorModal from "./ErrorModal";


function NewUser(props) {

	function newUserHandler(user){
		props.onNewUser(user);
	}
  return (
		<div>
			<ErrorModal title='Error' message='Invalid input'></ErrorModal>	
			<Card>
				<NewUserForm onFormSubmit={newUserHandler} />
			</Card>
		</div>
  );
}

export default NewUser;
