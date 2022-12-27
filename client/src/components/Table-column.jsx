import React from "react";

function Column(props) {
	return (
		<div>
			<tr>
				<td>{props.items}</td>
				<td>{props.carStatus}</td>
			</tr>		
		</div>
	);
}

export default Column;
