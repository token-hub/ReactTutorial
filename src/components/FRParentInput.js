import React from 'react'
import FRinput from './FRinput'

class FRParentInput extends React.Component {

	constructor(props) {
		super(props)
		
		this.inputRef = React.createRef();
	}

	clickHandler = () => {
		this.inputRef.current.focus();
	}

	render() {
		return (
			<div>
				<FRinput ref={this.inputRef} clickHandler={this.clickHandler} />
			</div>
		)
	}
}

export default FRParentInput