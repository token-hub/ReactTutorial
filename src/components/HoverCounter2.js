import React from 'react'

class HoverCounter2 extends React.Component {

	render() {

		let { count, incrementCount } = this.props

		return (
			<h2 onMouseOver={incrementCount} >Hovered { count } Times</h2>
		)
	}
}

export default HoverCounter2