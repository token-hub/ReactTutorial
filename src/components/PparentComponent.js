import React from 'react'
import RegComponent from './RegComponent'
import PureComponent from './PureComponent'

class PparentComponent extends React.Component {
	render() {

		constructor(props) {
			super(props)
		
			this.state = {
				 name: 'nasus'
			}
		}

		componentDidMount() {
			setInterval( () => {
				this.setState({
					name: 'nasus'
				})
			} , 2000 )
		}

		return (
			<div>
				<h1>Parent Component</h1>
				<RegComponent name={this.state.name} />
				<PureComponent name={this.state.name} />
			</div>
		)
	}
}

export default PparentComponent