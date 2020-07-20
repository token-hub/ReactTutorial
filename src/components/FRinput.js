import React from 'react'

const FRinput = React.forwardRef( (props, ref) => {
	return (
		<div>
			<input type="text" ref={ref} />
			<button onClick={props.clickHandler} >Click</button>
		</div>
	)
} )

export default FRinput