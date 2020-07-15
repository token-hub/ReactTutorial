import React from 'react'

function MemoComponentt({name}) {
		console.log('rendering memo')
	return (
		<div>
			{name}
		</div>
	)
}

export default React.memo(MemoComponentt)