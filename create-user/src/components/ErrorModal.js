import Card from "./Card";
import style from "./ErrorModal.module.css";
import Button from "./Button";
import Wrapper from "./Wrapper";

function ErrorModal(props){
	return(
		<Wrapper>
			<div className={style.backdrop} onClick={props.onClick}/>
			<Card className={style.modal}>
				<header className={style.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={style.content}>
					<p>{props.message}</p>
				</div>
				<footer className={style.actions}>
					<Button onClick={props.onClick}>Okay</Button>
				</footer>
			</Card>
		</Wrapper>);
}

export default ErrorModal;