import NewUserForm from './NewUserForm';
import style from './NewUser.module.css';

function NewUser(){
	return (
		<div className={style['new-user']}>
			<NewUserForm />
		</div>
	)
}

export default NewUser;