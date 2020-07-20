import React from 'react'
import ComponentE from './ComponentE'

class ComponentC extends React.Component {
	render() {
		return (
			<div>
				<h2>Component C</h2>
				<ComponentE />
			</div>
		)
	}
}

export default ComponentC