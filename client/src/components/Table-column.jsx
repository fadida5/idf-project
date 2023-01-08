import React from "react";

function Column(props) {
	return (
		<div className="table-responsive-sm mt-0 p-0 border-0">
			<table className="table table-dark table-bordered">
				<tbody>
					<tr>
						<td>{props.items}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Column;
