import React from 'react'

class ClickCounter2 extends React.Component {

	
	render() {

		let { count, incrementCount } = this.props

		return (
			<button onClick={incrementCount} >Clicked { count } Times</button>
		)
	}
}

export default ClickCounter2