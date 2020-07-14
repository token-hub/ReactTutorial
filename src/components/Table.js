import React from 'react'
import Columns from './Columns'

function Table() {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<Columns />						
					</tr>
				</thead>
			</table>
		</div>
	)
}

export default Table