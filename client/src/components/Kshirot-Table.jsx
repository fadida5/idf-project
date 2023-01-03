import React from "react";
import Column from "./Table-column";

function KshirotTable(props) {
	const kshirot = props.kashir;
	const tzdik = props.carNum;

	console.log(kshirot);
	console.log(tzdik);

	/*will get carNumber
and kshirot both arrays via props
*/
	function isKashir(status) {
		if (status === 1) {
			return "kashir";
		} else if (status === 0) {
			return "is not kashir";
		}
	}
	// if (kshirot.length === 0) {
	// 	props.getCarNumberKshirot();
	// } else {
	return (
		<div>
			<tr>
				<td>carNumber </td>
				<td> kashirot</td>
			</tr>
			{kshirot.map((item, index) => (
				<Column
					items={tzdik[index]}
					carStatus={isKashir(kshirot[index])}
				/>
			))}
		</div>
	);
	// }
}

export default KshirotTable;
