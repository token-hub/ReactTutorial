import React from 'react'

class RegComponent extends React.Component {
	render() {
		return (
			<div>
				<h1>RegComponent</h1> {this.props.name}
			</div>
		)
	}
}

export default RegComponent