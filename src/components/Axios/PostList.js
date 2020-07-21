import React from 'react'
import Axios from 'axios'
class PostList extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			post: []		 
		}
	}

	componentDidMount() {
		Axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(reposn)
		.catch();
	}

	render() {
		return (
			<div>
				<h1>list of posts</h1>
			</div>
		)
	}
}

export default PostList