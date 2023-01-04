import React, { useEffect, useState } from "react";
import { KshirotChart } from "./chart/Kshirot-Chart.js";
import { KshirotClock } from "./Clock/Kshirot-Clock.jsx";
import KshirotTable from "./Kshirot-Table";
import { useNavigate } from "react-router-dom";

function Dashboard(props) {
	// * ----- setting data ---------------------------------------
	const [CarNumbers, setCarNumbers] = useState({});
	const [Makats, setAllMakats] = useState({});
	const [AllKshirot, setAllKshirot] = useState({});
	const [makatKashir, setMakatKashir] = useState({});
	const [kshirotGdud, setKshirotGdud] = useState({});
	const [makatGdudKashirP, setMakatGdudKashirP] = useState([]);
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

	//! expermental kshirot pulling from client all kashirot p with one useEffect -----------------------------------------------------------------------------

	// useEffect(() => {
	// 	for (let index = 0; index < Makats.length; index++) {
	// 		let url =
	// 			"http://localhost:5000/kashirot/" +
	// 			userData.gdud +
	// 			"/" +
	// 			Makats[index] +
	// 			"/" +
	// 			"1" +
	// 			"";
	// 		const fetchData = async () => {
	// 			const data = await (await fetch(url)).json();
	// 			setMakatKashir(data.makatAvil);
	// 			setKshirotGdud(data.makatGdud);
	// 			setMakatGdudKashirP(data.makatP);
	// 			console.log(data.makatAvil);
	// 			console.log(data.makatGdud);
	// 		};
	// 		fetchData();
	// 	}
	// }, [userData, Makats]);
	// console.log("overall" + makatGdudKashirP);
	// console.log(Makats.length);
	// console.log(makatGdudKashirP.length);

	//!expermental kshirot pulling from client all kashirot p with a for loop for the useEffect -----------------------------------------------------------------------------

	// ? ---------- pulling for serever all kashirot p sending an array --------------

	// useEffect(() => {
	// 	let url =
	// 		"http://localhost:5000/kashirot/" +
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

	// function getAllMakatkshirot() {
	// 	const kashirotArray = Makats.map((obj, index) => {
	// 		return useMakatKashir();
	// 	});
	// }

	// useCarDatas();
	// console.log(CarData.carNumber);

	// console.log(CarData);
	// * ------------------- calculating percentage ---------------------------------
	if (AllKshirot.length > 0) {
		const allAvailable = AllKshirot.filter((item) => item === 1);
		console.log(allAvailable.length);
		console.log(AllKshirot.length);
		const kashirSum = AllKshirot.length - allAvailable.length;
		console.log(kashirSum);

		const kshirotAllP =
			Math.floor((allAvailable.length / AllKshirot.length) * 100) + "%";
		console.log(kshirotAllP);

		// * ------------------- running the dashboard -----------------------------

		return (
			<div>
				<div>
					{userData.isManager === 1 ? (
						<button onClick={carAdd}> add new car</button>
					) : null}
				</div>
				<div>
					<KshirotTable
						// getCarNumberKshirot={props.useCar}
						kashir={AllKshirot}
						carNum={CarNumbers}
					/>
				</div>
				<div>
					<div /* //! will replace this with components when marging*/>
						<label htmlFor="chart">
							<h2>Percentage of tool avialabe</h2>
							<p>{kshirotAllP}</p>
						</label>
					</div>
					<div>
						<label htmlFor="chart">
							<h2>Number of avialabe tools</h2>
							<p>{allAvailable.length}</p>
						</label>
					</div>
					<div>
						<label htmlFor="chart">
							<h2>string</h2>
							<p /* to be filled */></p>
						</label>
					</div>
					{/* <KshirotChart
						name="chart"
						makats={Makats}
						makatP={makatGdudKashirP}
					/> */}
				</div>
				<div>
					<KshirotClock
						avilP={allAvailable.length}
						unavilP={kashirSum}
					/>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				<h1>Loding (Sorry, working only after loging in for the first time)</h1>
			</div>
		);
	}
}

export default Dashboard;
