import React from "react";
import Column from "./Table-column";
import classes from "./Kshirot.module.css";

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
		<div className={classes.Htable}>
			<div className="table-responsive-sm mb-0 p-0 border-0">
				<table className="table table-sm table-dark table-bordered ">
					<thead>
						<tr>
							<th scope="col">carNumber </th>
							<th scope="col"> kashirot</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								{kshirot.map((item, index) => (
									<Column items={tzdik[index]} />
								))}
							</td>
							<td>
								{kshirot.map((item, index) => (
									<Column items={isKashir(kshirot[index])} />
								))}
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
	// }
}

export default KshirotTable;
