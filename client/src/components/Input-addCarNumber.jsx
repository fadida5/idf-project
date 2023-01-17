import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

function InputaddCarNumber(props) {
	const carNumerInput = useRef();
	const makatInput = useRef();
	const kshirotInput = useRef();
	const gdudInput = useRef();
	const history = useNavigate();

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

		if (
			newTzadik.carNumber.length === 6 &&
			newTzadik.makat.length === 6 &&
			(newTzadik.kshirot === "1" || newTzadik.kshirot === "0") &&
			newTzadik.gdud.length > 0
		) {
			props.addNewTzadik(newTzadik);
			history("/main");
		} else {
			console.log(newTzadik + " is not a valid");
		}
	}
	return (
		<div>
			<form
				className="form-control-lg"
				onSubmit={submitHendler}
			>
				<div>
					<input
						className="form-control mb-2"
						type="text"
						name={props.nameCarNumer}
						placeholder={props.inputCarNumer}
						ref={carNumerInput}
					></input>
				</div>
				<div>
					<input
						className="form-control mb-2"
						type="text"
						name={props.nameMakat}
						placeholder={props.inputNameMakat}
						ref={makatInput}
					></input>
				</div>
				<div>
					<input
						className="form-control mb-2"
						type="text"
						name={props.nameKshirot}
						placeholder={props.inputNameKshirot}
						ref={kshirotInput}
					></input>
				</div>
				<div>
					<input
						className="form-control mb-2"
						type="text"
						name={props.nameGdud}
						placeholder={props.inputNameGdud}
						ref={gdudInput}
					></input>
				</div>
				<div>
					<button
						className="btn btn-block btn-lg btn-primary"
						type="submit"
					>
						submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default InputaddCarNumber;
