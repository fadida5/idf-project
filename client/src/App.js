import React, { useState } from "react";
import Login from "../src/components/Login";
import Dashboard from "./components/Dashboard";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddCarNumber from "./AddCarNumber";
import "react-bootstrap";
import axios from "axios";

function App() {
	// * ----------------------------- login -----------------------------------
	const [userData, setUserData] = useState({});
	// * ---------------------------- dashboard -------------------------------------
	// const [CarNumbers, setCarNumbers] = useState({});
	// const [Makats, setAllMakats] = useState({});
	// const [AllKshirot, setAllKshirot] = useState({});
	// const [makatKashir, setMakatKashir] = useState({});
	// const [kshirotGdud, setKshirotGdud] = useState({});
	// ------------------------------------ navigtion ------------------------------------
	const history = useNavigate();

	// * ---------------------------------- fetch for login -------------------------------

	function usePernr(data) {
		axios.get("http://localhost:5000/login/" + data + "")
			.then((item) => {
				console.log(item);
				console.log(data);
				if (item.data.pernr === data) {
					setUserData(item.data);
					history("/main");
					// console.log(userData);
				} else {
					console.log("pernr incorrect");
				}
			});
	}

	// ! ----------- fetch for dashboard (gdud data) doesnt work for now ----------------------------------

	// function useCarDatas(gdud) {
	// 	let arg = "";
	// 	if (userData.isManager === 1) {
	// 		arg = "http://localhost:5000/";
	// 	} else if (userData.isManager === 0) {
	// 		arg = "http://localhost:5000/" + gdud + "";
	// 	}
	// 	fetch(arg, {
	// 		method: "GET",
	// 		// body: JSON.stringify(data),
	// 		headers: {
	// 			"Content-Type": "application.json",
	// 		},
	// 	})
	// 		.then((res) => res.json())
	// 		.then((item) => {
	// 			console.log(item);
	// 			// setCarData(item);
	// 			setCarNumbers(item.carNumbers);
	// 			setAllMakats(item.allMakats);
	// 			setAllKshirot(item.allKshirot);
	// 			console.log(item.carNumbers);
	// 			console.log(item.allMakats);
	// 			console.log(item.allKshirot);
	// 		});
	// }

	// ! ------------------- fetch for kshirot (doesnt work for now) --------------------------------------

	// function useMakatKashir(makat, kashir) {
	// 	let url =
	// 		"http://localhost:5000/kashirot/" +
	// 		userData.gdud +
	// 		"/" +
	// 		makat +
	// 		"/" +
	// 		kashir +
	// 		"";
	// 	fetch(url, {
	// 		method: "GET",
	// 		headers: { "Content-Type": "application.json" },
	// 	})
	// 		.then((result) => result.json())
	// 		.then((item) => {
	// 			setMakatKashir(item.makatAvil);
	// 			setKshirotGdud(item.makatGdud);
	// 			console.log(item.makatAvil);
	// 			console.log(item.makatGdud);
	// 		});
	// }

	// * ------------------------- running the app -----------------------------------------------------------------
	return (
		<div>
			<Routes>
				<Route
					path="/"
					element={<Login pernrNav={usePernr} />}
				/>
				<Route
					path="/main"
					element={
						<Dashboard
							user={userData}
						// useCar={useCarDatas}
						// allK={AllKshirot}
						// allCarN={CarNumbers}
						/>
					}
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
