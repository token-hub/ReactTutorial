import React from 'react'

class UserGreeting extends React.Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 isLoggedIn: false
		}
	}

	render() {
		// return (
		// 	this.state.isLoggedIn ? <div>Welcome Johnny Boy!</div> : <div>Welcome Guest</div>
		// )
		
		return this.state.isLoggedIn && <div>Welcome Johnny BOI!</div>
	}
}

export default UserGreeting