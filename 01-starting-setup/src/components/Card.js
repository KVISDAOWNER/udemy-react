import './Card.css'
function Card(props){
	const classes = 'card ' + props.className; //othwerwise we lose the classnames given to it outside of this file
	return(
		<div className={classes}>{props.children}</div> //.children is reserved - it is the content between open and close tag
	)
}

export default Card;