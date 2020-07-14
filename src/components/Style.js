import React from 'react'
import './myStyle.css'

function Style(props) {

	let className = props.primary ? 'primary' : '';
	return (
		<div>
			<h1 className={className}>Style</h1>
		</div>
	)
}

export default Style