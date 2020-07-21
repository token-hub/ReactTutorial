import React from 'react'
import Axios from 'axios'
class PostForm extends React.Component {

	constructor(props) {
		super(props)
	
		this.state = {
			 title: '',
			 body: '',
			 userid: '',
		}
	}

	changeHandler = event => this.setState( {[event.target.name]: event.target.value} )
	submitHandler = event => {
		event.preventDefault()
		Axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
		.then( response => console.log( response ) )
		.catch( error => console.log( error ) )
	}

	render() {

		let {title, body, userid} = this.state

		return (

			<form onSubmit={this.submitHandler}>
				<div>
					<label htmlFor="">User ID</label>
					<input type="text" value={userid} name='userid' onChange={this.changeHandler}/>
				</div>

				<div>
					<label htmlFor="">Title</label>
					<input type="text" value={title} name='title' onChange={this.changeHandler}/>
				</div>

				<div>
					<label htmlFor="">Body</label>
					<input type="text" value={body} name='body' onChange={this.changeHandler}/>
				</div>

				<div>
					<button type='submit' >Submit</button>
				</div>
			</form>

		)
	}
}

export default PostForm