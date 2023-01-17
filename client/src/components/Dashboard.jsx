import React, { useEffect, useState } from "react";
import { KshirotChart } from "./chart/Kshirot-Chart.js";
import { KshirotClock } from "./Clock/Kshirot-Clock.jsx";
import KshirotTable from "./Kshirot-Table";
import { useNavigate } from "react-router-dom";
import "react-bootstrap";
import classes from "./Dashboard.module.css";

function Dashboard(props) {
	// * ----- setting data ---------------------------------------
	const [CarNumbers, setCarNumbers] = useState({});
	const [Makats, setAllMakats] = useState({});
	const [AllKshirot, setAllKshirot] = useState({});
	// eslint-disable-next-line no-unused-vars
	const [makatKashir, setMakatKashir] = useState({});
	// eslint-disable-next-line no-unused-vars
	const [kshirotGdud, setKshirotGdud] = useState({});
	const [makatGdudKashirP, setMakatGdudKashirP] = useState([]);
	// eslint-disable-next-line no-unused-vars
	const [gdudim, setGdudim] = useState([]);
	const userData = props.user;
	const history = useNavigate();

	// * -------------- for maneger adding a new car ------------------------------------

	function carAdd() {
		history("/add");
	}

	// ? --------------------------- fetch for dashboard example -----------------------------------------------------------------------------

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

	// ? --------------------------- fetch for dashboard example -----------------------------------------------------------------------------

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

	// * ---------------------- waiting for the data using useEffect dashboard -----------------------------------------------------------------------------

	useEffect(() => {
		// * ---------- fetch for dashboard -----------------------------------
		let arg = "";
		if (userData.isManager === 1) {
			arg = "http://localhost:5000/";
		} else if (userData.isManager === 0) {
			arg = "http://localhost:5000/" + userData.gdud + "";
		}
		const dataFetch = async () => {
			const data = await (await fetch(arg)).json();
			if (userData.isManager === 1) {
				setGdudim(data.allGdud);
			}
			setCarNumbers(data.carNumbers);
			setAllMakats(data.allMakats);
			setAllKshirot(data.allKshirot);
			console.log(data.carNumbers);
			console.log(data.allMakats);
			console.log(data.allKshirot);
		};
		dataFetch();
	}, [userData]);

	// * --------- waiting for the data using useEffect for kshirot ---------------

	// for (let index = 0; index < Makats.length; index++) {
	// 	useEffect(() => {
	// 		let url =
	// 			"http://localhost:5000/kashirot/" +
	// 			userData.gdud +
	// 			"/" +
	// 			Makats[index] +
	// 			"/" +
	// 			"1" +
	// 			"";
	// 			const fetchData = async () => {
	// 				const data = await (await fetch(url)).json();
	// 				setMakatKashir(data.makatAvil);
	// 				setKshirotGdud(data.makatGdud);
	// 				setMakatGdudKashirP(data.makatP);
	// 				console.log(data.makatAvil);
	// 				console.log(data.makatGdud);
	// 			}
	// 			fetchData()
	// 	},[Makats,userData,index])

	// }

	//* kshirot pulling from client all kashirot p with one useEffect -----------------------------------------------------------------------------

	useEffect(() => {
		const makatPArray = [];
		for (let index = 0; index < Makats.length; index++) {
			let url =
				"http://localhost:5000/kashirot/" +
				userData.gdud +
				"/" +
				Makats[index] +
				"/" +
				"1" +
				"";
			const fetchData = async () => {
				const data = await (await fetch(url)).json();
				await setMakatKashir(data.makatAvil);
				await setKshirotGdud(data.makatGdud);
				await makatPArray.push(data.makatP);
				// await console.log(data.makatAvil);
				// await console.log(data.makatGdud);
			};
			fetchData();
			setMakatGdudKashirP(makatPArray);
		}
	}, [userData, Makats]);
	// console.log("overall " + makatGdudKashirP);
	// console.log(Makats.length);
	// console.log(makatGdudKashirP.length);

	// ? ---------- pulling for serever all kashirot p sending an array ------------------------------------------------------------------------------------------------

	// useEffect(() => {
	// 	let url =
	// 		"http://localhost:5000/kashirotarry/" +
	// 		userData.gdud +
	// 		"/" +
	// 		Makats +
	// 		"/" +
	// 		"1" +
	// 		"";
	// 	const fetchData = async () => {
	// 		const data = await (await fetch(url)).json();
	// 		setMakatKashir(data.makatAvil);
	// 		setKshirotGdud(data.makatGdud);
	// 		setMakatGdudKashirP(data.makatP);
	// 		console.log(data.makatAvil);
	// 		console.log(data.makatGdud);
	// 	};
	// 	fetchData();
	// }, [Makats, userData]);

	// ! --------------------------- expermental 2 -----------------------------------------------------------------------------

	/*function getAllMakatkshirot() {
		const kashirotArray = Makats.map((obj, index) => {
			return useMakatKashir();
		});
	}

	useCarDatas();
	console.log(CarData.carNumber);

	console.log(CarData);
	*/

	// * ------------------- calculating percentage ---------------------------------
	if (AllKshirot.length > 0) {
		const allAvailable = AllKshirot.filter((item) => item === 1);
		// console.log(allAvailable.length);
		// console.log(AllKshirot.length);
		const kashirSum = AllKshirot.length - allAvailable.length;
		// console.log(kashirSum);

		const kshirotAllP =
			Math.floor((allAvailable.length / AllKshirot.length) * 100) + "%";
		// console.log(kshirotAllP);
		// * ------------------- running the dashboard -----------------------------
		if (makatGdudKashirP.length === Makats.length) {
			return (
				<div className={classes.mainDiv}>
					<div className="row">
						<div>
							{userData.isManager === 1 ? (
								<button
									className="btn btn-light mb-2 mt-2"
									onClick={carAdd}
								>
									{" "}
									add new car
								</button>
							) : null}
						</div>
						<div className="col-md-12  ">
							<KshirotTable
								// getCarNumberKshirot={props.useCar}
								kashir={AllKshirot}
								carNum={CarNumbers}
							/>
						</div>
						<div className="col-md-6">
							<div>
								<label
									className="text-white"
									htmlFor="chart"
								>
									<h2>Percentage of tool avialabe</h2>
									<h4>{kshirotAllP}</h4>
								</label>
							</div>
							<div>
								<label
									className="text-white"
									htmlFor="chart"
								>
									<h2>Number of avialabe tools</h2>
									<h4>{allAvailable.length}</h4>
								</label>
							</div>
							<div>
								{/* <label
									className="text-white"
									htmlFor="chart"
								>
									<h2>string</h2>
									<h4></h4>
								</label> */}
							</div>
							{userData.isManager === 1 ? (
								<KshirotChart
									name="chart"
									makats={Makats}
									makatP={makatGdudKashirP}
									gdudName="hativa"
								/>
							) : (
								<KshirotChart
									name="chart"
									makats={Makats}
									makatP={makatGdudKashirP}
									gdudName={"gdud " + userData.gdud}
								/>
							)}
						</div>
						<div className="col-md-6">
							<KshirotClock
								className={classes.clock}
								avilP={allAvailable.length}
								unavilP={kashirSum}
							/>
						</div>
					</div>
				</div>
			);
		} else {
			<h1>Loding </h1>;
		}
	} else {
		return (
			<div>
				<h1>Loding (Sorry, working only after loging in for the first time)</h1>
			</div>
		);
	}
}

export default Dashboard;
