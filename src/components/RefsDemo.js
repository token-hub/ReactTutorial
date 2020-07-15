import React from 'react'

class RefsDemo extends React.Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 name: ''
		}

		this.inputRef = React.createRef()
	}

	changeName = event => {
		this.setState({
			name: event.target.value
		});
	}

	componentDidMount() {
		console.log(this.inputRef)
		this.inputRef.current.focus()
	}

	clickHandler = () => {
		console.log(this.inputRef.current.value);
	}

	render() {
		return (
			<div>
				<input type="text" onChange={this.changeName} value={this.state.name} ref={this.inputRef}/>
				<button onClick={this.clickHandler}>Wazzup!</button>
			</div>
		)
	}
}

export default RefsDemo