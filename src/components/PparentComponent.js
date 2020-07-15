import React from 'react'
import RegComponent from './RegComponent'
import PureComponent from './PureComponent'
import MemoComponent from './MemoComponentt'

class PparentComponent extends React.Component {
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

	render() {

		console.log('********** rendering parent ***************');
		
		return (
			<div>
				<h1>Parent Component</h1>
				<MemoComponent name={this.state.name} />
				{/*<RegComponent name={this.state.name} />
				<PureComponent name={this.state.name} />*/}
			</div>
		)
	}
}

export default PparentComponent