import React from "react";
import Column from "./Table-column";

function KshirotTable(props) {
	/*will get carNumber
and kshirot both arrays via props
*/
	// function isKashir(status) {
	// 	if (status === 1) {
	// 		return "kashir";
	// 	} else if (status === 0) {
	// 		return "is not kashir";
	// 	}
	// }

	props.getCarNumberKshirot();
	return (
		<div>
			<tr>
				<td>carNumber </td>
				<td> kashirot</td>
			</tr>
			{/* {props.carNumber.map((item, index) => (
				<Column
					items={item}
					carStatus={isKashir(props.kshirot[index])}
				/>
			))} */}
		</div>
	);
}

export default KshirotTable;
