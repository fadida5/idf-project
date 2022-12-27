import React, { useRef } from "react";

function InputTub(props) {
	const pernrInput = useRef();

	function submitHendler(event) {
		event.preventDefault();

		const enterdpernr = pernrInput.current.value;

		props.newPernp(enterdpernr);
	}
	return (
		<div>
			<form onSubmit={submitHendler}>
				<input
					type="text"
					name={props.name}
					placeholder={props.inputName}
					ref={pernrInput}
				></input>
				<div>
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	);
}

export default InputTub;
