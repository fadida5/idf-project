import React, { useRef } from "react";

function InputaddCarNumber(props) {
	const carNumerInput = useRef();
	const makatInput = useRef();
	const kshirotInput = useRef();
	const gdudInput = useRef();

	function submitHendler(event) {
		event.preventDefault();

		const enterdcarNumerInput = carNumerInput.current.value;
		const enterdMakatInput = makatInput.current.value;
		const enterdKshirotInput = kshirotInput.current.value;
		const enterdGdudInput = gdudInput.current.value;

		const newTzadik = {
			carNumber: enterdcarNumerInput.toString(),
			makat: enterdMakatInput.toString(),
			kshirot: enterdKshirotInput.toString(),
			gdud: enterdGdudInput.toString(),
		};

		props.addNewTzadik(newTzadik);
	}
	return (
		<div>
			<form onSubmit={submitHendler}>
				<div>
					<input
						type="text"
						name={props.nameCarNumer}
						placeholder={props.inputCarNumer}
						ref={carNumerInput}
					></input>
				</div>
				<div>
					<input
						type="text"
						name={props.nameMakat}
						placeholder={props.inputNameMakat}
						ref={makatInput}
					></input>
				</div>
				<div>
					<input
						type="text"
						name={props.nameKshirot}
						placeholder={props.inputNameKshirot}
						ref={kshirotInput}
					></input>
				</div>
				<div>
					<input
						type="text"
						name={props.nameGdud}
						placeholder={props.inputNameGdud}
						ref={gdudInput}
					></input>
				</div>
				<div>
					<button type="submit">submit</button>
				</div>
			</form>
		</div>
	);
}

export default InputaddCarNumber;
