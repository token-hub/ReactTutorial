import React from 'react'
import Axios from 'axios'
class PostList extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			posts: [],
			errorMsg: ''	 
		}
	}

	componentDidMount() {
		Axios.get('https://jsonplaceholder.typicode.com/posts')
		.then( response => { 
			this.setState({ posts: response.data })
		} )
		.catch( error => { 
			console.log(error)
			this.setState( {errorMsg: 'Error on Retrieving Data'} )
		} );
	}

	render() {

		let { posts, errorMsg } = this.state;
		return (
			<div>
				<h1>list of posts</h1>
				{
					posts.length ? posts.map( post => <div key={post.id}> {post.title} </div> ) : null 
				}
				{
					errorMsg ? <div>{errorMsg}</div> : null 
				}
			</div>
		)
	}
}

export default PostList