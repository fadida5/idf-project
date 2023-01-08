import React from "react";
import InputaddCarNumber from "./components/Input-addCarNumber";
import classes from "./components/Login.module.css";

function AddCarNumber(props) {
	// function addingNew(Tzadik) {
	// 	fetch("http://localhost:5000/addcar", {
	// 		method: "POST",
	// 		body: JSON.stringify(Tzadik),
	// 		headers: {
	// 			"Content-Type": "application.json",
	// 		},
	// 	});
	// 	console.log(Tzadik);
	// }

	function addingNew(Tzadik) {
		// let url =
		// 	"http://localhost:5000/addcar" +
		// 	Tzadik.carNumber +
		// 	"/" +
		// 	Tzadik.gdud +
		// 	"/" +
		// 	Tzadik.kshirot +
		// 	"/" +
		// 	Tzadik.makat +
		// 	"";
		fetch("http://localhost:5000/addcar", {
			method: "POST",
			body: JSON.stringify(Tzadik),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((item) => {
				console.log(item);
			});
	}

	return (
		<div className="mt-5 row">
			<div className="col-md-6 offset-md-4 col-sm-12">
				<div>
					<h1 className={classes.header}>welcome meneger</h1>
				</div>
				<div>
					<InputaddCarNumber
						nameCarNumber="CarNumberIn"
						inputCarNumer="Input carNumber"
						nameMakat="MakatIn"
						inputNameMakat="input Makat"
						nameKshirot="KshirotIn"
						inputNameKshirot="input 1/0"
						nameGdud="GdudIn"
						inputNameGdud="input Gdud"
						addNewTzadik={addingNew}
					/>
				</div>
			</div>
		</div>
	);
}

export default AddCarNumber;
