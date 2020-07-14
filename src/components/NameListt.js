import React from 'react' 	
import Person from './Person'

function NameListt() {
	
	const names = ['jin', 'king', 'jack-7'];
	const persons = [
		{
			id: 1,
			name: 'a',
			skill: 'React'
		},
		{
			id: 2,
			name: 'b',
			skill: 'Vue'
		},
		{
			id: 3,
			name: 'c',
			skill: 'Angular'
		},
		{
			id: 4,	
			name: 'd',
			skill: 'NodeJS'
		},
	]
	
	// const personList = persons.map( person => <Person key = { person.id } person = { person } />);
	const namesList = names.map( (name, index) => <h2  key = { index } > { index } { name } </h2> );
	return <div>{namesList}</div>
	// return <div>{personList}</div>
}

export default NameListt