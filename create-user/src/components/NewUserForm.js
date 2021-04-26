import style from './NewUserForm.module.css'
function NewUserForm(props){
	return (
		<div className={style['new-user']}>
			<form>
				<div className={style['new-user__controls']}>
					<div className={style['new-user__control']}>
						<label>Username</label>
						<input type='text'></input>
					</div>
					<div className={style['new-user__control']}>
						<label>Age (Years)</label>
						<input type='text'></input>
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