
import { useState } from 'react';
import style from './NewUserForm.module.css'


function NewUserForm(props){
	const [username, setUsername] = useState('');
	const [age, setAge] = useState('');
	

	function usernameChangedHandler(event){
		setUsername(event.target.value);
	}

	function ageChangedHandler(event){
		setAge(event.target.value);
	}

	function submitHandler(event){
		event.preventDefault(); //dont reload page on form submit - this is otherwise default html behavior

		const userData = {
			id: username,
			username: username,
			age: age
		};

		console.log(userData);
	}

	return (
		<div className={style['new-user']}>
			<form onSubmit={submitHandler}>
				<div className={style['new-user__controls']}>
					<div className={style['new-user__control']}>
						<label>Username</label>
						<input type='text' onChange={usernameChangedHandler}></input>
					</div>
					<div className={style['new-user__control']}>
						<label >Age (Years)</label>
						<input type='text' onChange={ageChangedHandler}></input>
					</div>
				</div>
				<div>
					<button type='submit'>Add User</button>
				</div>
			</form>
		</div>
	)
}

export default NewUserForm;