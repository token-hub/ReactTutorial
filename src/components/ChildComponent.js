import React from 'react'

function ChildComponent(props) {
	return (
		<div>
			<h1>Child</h1>
			<button onClick = { () => props.greetParent() } >Click here</button>
		</div>
	)
}

export default ChildComponent