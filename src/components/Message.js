import React from 'react';

export class Message extends React.Component {
	
	constructor() {
		super();
		this.state = {
			message: 'Welcome piece of shitty :D'
		}
	}

	changeMessage() {
		this.setState({
			message: 'You\'re not welcome shitty!'
		});
	}
	
	render() {
		return(
			<div>
				<h1> { this.state.message } </h1>
				<button onClick={() => this.changeMessage()}>Click here.</button>
			</div>
		)
	}
}

export default Message