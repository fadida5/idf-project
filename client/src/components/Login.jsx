import { data } from "jquery";
import React, { useEffect, useState } from "react";
import InputTub from "./Input-Pernr";

function Login(props) {
	props.pernrNav(data);

	return (
		<div>
			<h1>Please login</h1>
			<InputTub
				name="pernr"
				inputName="personal number"
				newPernp={props.pernrNav}
			/>
		</div>
	);
}

export default Login;
