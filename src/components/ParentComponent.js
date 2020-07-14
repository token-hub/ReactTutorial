import React from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends React.Component {

	constructor(props) {
		super(props)
	
		this.state = {
			parentName: 'parent'		 
		}

		this.greetParent = this.greetParent.bind(this);
	}
	
	greetParent(child = 'wewskie') {
		alert(`Hello ${this.state.parentName} from ${child}`);
	}

	render() {
		return (
			<div>
				<ChildComponent greetParent = { this.greetParent }  />
			</div>
		)
	}
}

export default ParentComponent