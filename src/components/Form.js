import React from 'react'

class Form extends React.Component {
	
	constructor(props) {
		super(props)
	
		this.state = {
			 username: '',
			 comments: '',
			 topic: 'react'
		}
	}

	changeUsernameHandler = event => {
		this.setState({
			username: event.target.value
		})
	}

	changeCommentsHandler = event => {
		this.setState({
			comments: event.target.value
		})
	}

	changeTopicHandler = event => {
		this.setState({
			topic: event.target.value
		})
	}

	submitHandler = event => {
		alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
	}

	render() {
		return (
			<div>
				<form action="" onSubmit={this.submitHandler}>
					<div>
						<label htmlFor="">Username</label>
						<input type="text" value={this.state.username} onChange={this.changeUsernameHandler} />
					</div>
					<div>
						<label htmlFor="">Comments</label>
						<textarea value={this.state.comments} onChange={this.changeCommentsHandler} />
					</div>
					<div>
						<label htmlFor="">Topic</label>
						<select name="" id=""  value={this.state.topic} onChange={this.changeTopicHandler}>
							<option value="react">React</option>
							<option value="vue">Vue</option>
							<option value="angular">angular</option>
						</select>
					</div>
					<button type='submit'>Submit</button>
				</form>
			</div>
		)
	}
}

export default Form