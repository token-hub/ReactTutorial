import React from 'react'

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
	}
	
	increment() {
		// this.setState({
		// 	count: this.state.count + 1
		// })
		this.setState( prevState => ({
				count: prevState.count + 1
			}) 
		)
	}

	incrementByFive() {
		this.increment();
		this.increment();
		this.increment();
		this.increment();
		this.increment();
	}

	render() {
		return (
			<div>
				<h1>Count {this.state.count} </h1>
				<button onClick={ () => this.incrementByFive() }>Increment</button>
			</div>
		)
	}
}

export default Counter