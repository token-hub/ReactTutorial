import React from 'react'
import {UserConsumer} from './UserContext'


class ComponentF extends React.Component {
	render() {
		return (
			<div>
				<h2>Component F</h2>
				<UserConsumer>
					{
						username => { 
							return <h1>{username}</h1>
						}
					}
				</UserConsumer>
			</div>
		)
	}
}

export default ComponentF