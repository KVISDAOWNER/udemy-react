# Pass data from parent -> child
props


# Pass data from child -> parent



# State Updates but with some of Last State's Values
If the new state update depends of some of the previous state values then do this:

	import {useState} from 'react';

	...

	const [userinput, setInput] = useState(title: '', amount: '', date: '');

	function titleChangedHandler(event){
		setUserInput( (prevState) =>{ //react supplies (and guarantees that it is exactly the) previousstate
			return	{...prevState, title: event.target.value};
		});
	}

and not this:

	...

	const [userinput, setInput] = useState(title: '', amount: '', date: '');

	function titleChangedHandler(event){
		setUserInput({
			...userinput, 
			title: event.target.value
		});
	}


Because you may risk if you spam input that it a delete or outdated "userinput"

