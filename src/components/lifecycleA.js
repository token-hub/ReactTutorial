import React from 'react'
import LifecycleB from './LifecycleB'

class lifecycleA extends React.Component {
	/*
		[ Mounting ](add jsx to dom)- constructor, getDerivedStateFromProps, render, componentDidMount
		[ Updating ](update jsx to dom) - getDerivedStateFromProps, shouldComponentUpdate, render(commonly used), getSnapshotBeforeUpdate, componentDidUpdate(commonly used)
		[ Unmounting ](remove jsx to dom) - componentWillUnmount
		[ Error handling ] - getDerivedStateFromError(error), componentDidCatch(error, info)
	 */
	constructor(props) {
		super(props)
	
		this.state = {
			 name: 'john'
		}
		console.log('lifecycleA constructor');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('lifecycleA getDerivedStateFromProps');
		return null;
	}

	shouldComponentUpdate() {
		console.log('lifecycleA shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('lifecycleA getSnapshotBeforeUpdate');
		return null;
	}

	componentDidUpdate() {
		console.log('lifecycleA componentDidUpdate');
	}
	
	componentDidMount() {
		console.log('lifecycleA  componentDidMount');
	}	

	changeState = () => {
		this.setState({
			name: 'uuuu'
		});
	}

	render() {
		console.log('lifecycleA render');
		return (
			<div>
				<LifecycleB />
				<button onClick={this.changeState}>aaa</button>
			</div>
		)
	}
}

export default lifecycleA