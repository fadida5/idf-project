import React, { useState } from "react";
import Login from "../src/components/Login";
import Dashboard from "./components/Dashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddCarNumber from "./AddCarNumber";

function App() {
	const [userData, setUserData] = useState({});
	const history = useNavigate();

	function usePernr(data) {
		fetch("http://localhost:5000/login/" + data + "", {
			method: "GET",
			// body: JSON.stringify(data),
			headers: {
				"Content-Type": "application.json",
			},
		})
			.then((res) => res.json())
			.then((item) => {
				console.log(item);
				if (item.pernr === data) {
					setUserData(item);
					history("/main");
					console.log(userData);
				} else {
					console.log("pernr incorrect");
				}
			});
		console.log(data);
	}

	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={<Login pernrNav={usePernr} />}
				/>
				<Route
					path="/main"
					element={<Dashboard user={userData} />}
				/>
				<Route
					path="/add"
					element={<AddCarNumber />}
				/>
			</Routes>
		</div>
	);
}

export default App;
