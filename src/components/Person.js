import React from 'react'

function Person({person}) {
	return (
		<div>
			<h1>Hi i am {person.name} and I know {person.skill}</h1>
		</div>
	)
}

export default Person