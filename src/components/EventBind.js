import React from 'react'

class EventBind extends React.Component {
	
	constructor(props) {
		super(props)
	
		this.state = {
			message: `Event bind is cool!`		 
		}

		// this.clickHandler = this.clickHandler.bind(this);
	}

	// clickHandler() {
	// 	this.setState({
	// 		message: 'button was clicked! :D'
	// 	})
	// }

	clickHandler = () => {
		this.setState({
			message: 'button was clicked! :D'
		})
	}
	
	render() {
		return(
			<div>
				<h1> { this.state.message } </h1>
				<button onClick = { this.clickHandler } >Click</button>
			</div>
		)
	}
}

export default EventBind