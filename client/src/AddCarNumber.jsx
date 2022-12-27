import React from "react";
import InputaddCarNumber from "./components/Input-addCarNumber";

function AddCarNumber(props) {
	function addingNew(Tzadik) {
		fetch("http://localhost:5000/addcar", {
			method: "POST",
			body: JSON.stringify(Tzadik),
			headers: {
				"Content-Type": "application.json",
			},
		});
		console.log(Tzadik);
	}

	return (
		<div>
			<div>
				<h1>welcome meneger</h1>
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
	);
}

export default AddCarNumber;
