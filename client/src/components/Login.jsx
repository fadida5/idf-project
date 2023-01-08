import { data } from "jquery";
import InputTub from "./Input-Pernr";
import "react-bootstrap";
import classes from "./Login.module.css";

function Login(props) {
	props.pernrNav(data);

	return (
		<div className="mt-5">
			<div className="row">
				<div className="col-md-6 offset-md-3 col-sm-12">
					<h1 className={classes.header}>Please login</h1>
					<InputTub
						name="pernr"
						inputName="personal number"
						newPernp={props.pernrNav}
					/>
				</div>
			</div>
		</div>
	);
}

export default Login;
