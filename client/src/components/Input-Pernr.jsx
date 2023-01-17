import React, { useRef } from "react";
import "react-bootstrap";

function InputTub(props) {
	const pernrInput = useRef();

	function submitHendler(event) {
		event.preventDefault();

		const enterdpernr = pernrInput.current.value;

		props.newPernp(enterdpernr);
	}
	return (
		<div>
			<form
				className="form-control-lg"
				onSubmit={submitHendler}
			>
				<input
					className="form-control mb-2"
					type="text"
					name={props.name}
					placeholder={props.inputName}
					ref={pernrInput}
				></input>
				<div>
					<button
						className="btn btn-block btn-lg btn-primary"
						type="submit"
					>
						Login
					</button>
				</div>
			</form>
		</div>
	);
}

export default InputTub;
