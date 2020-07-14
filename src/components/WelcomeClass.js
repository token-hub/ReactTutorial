import React, { Component } from 'react';

class WelcomeClass extends Component 
{
	render() {
		const {name, wews, children} = this.props;
		return (
			<div>
				<h1> Hello Welcome {name} ... {wews} </h1>
				{children}
			</div>
		) 
	}
}

export default WelcomeClass