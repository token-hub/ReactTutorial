import React from 'react'
import WithCounter from './WithCounter'

class ClickCounter extends React.Component {

	render() {
		let { count, incrementCount } = this.props

		return (
			<button onClick={incrementCount}> Clicked {count} Times</button>
		)
	}
}

export default WithCounter(ClickCounter, 90) 