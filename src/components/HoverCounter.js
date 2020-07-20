import React from 'react'
import WithCounter from './WithCounter'

class HoverCounter extends React.Component {


	render() {

		let { count, incrementCount } = this.props

		return (
			<h1 onMouseOver={incrementCount}> {this.props.name} Hovered {count} Times</h1>
		)
	}
}

export default WithCounter(HoverCounter, 2)