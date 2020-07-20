import React from 'react'

function ErrorHero({heroName}) {

	if (heroName === 'joker') {
		throw new Error('Not a HERO!');
	}

	return (
		<div>
			{heroName}
		</div>
	)
}

export default ErrorHero