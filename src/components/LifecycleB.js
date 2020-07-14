import React from 'react'

class lifecycleB extends React.Component {
	
	constructor(props) {
		super(props)
	
		this.state = {
			 name: 'john'
		}
		console.log('lifecycleB constructor');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('lifecycleB getDerivedStateFromProps');
		return null;
	}

	shouldComponentUpdate() {
		console.log('lifecycleB shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('lifecycleB getSnapshotBeforeUpdate');
		return null;
	}

	componentDidUpdate() {
		console.log('lifecycleB componentDidUpdate');
	}

	componentDidMount() {
		console.log('lifecycleB componentDidMount');
	}

	render() {
		console.log('lifecycleB render');
		return (
			<div>
				
			</div>
		)
	}
}

export default lifecycleB