import React from 'react'

class PureComponent extends React.PureComponent {
	render() {
		return (
			<div>
				<h1>Pure Components</h1>  {this.props.name}
			</div>
		)
	}
}

export default PureComponent