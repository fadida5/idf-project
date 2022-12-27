import React, { useEffect, useState } from "react";
import { KshirotChart } from "./chart/Kshirot-Chart.js";
import { KshirotClock } from "./Clock/Kshirot-Clock.jsx";
import KshirotTable from "./Kshirot-Table";
import { useNavigate } from "react-router-dom";

function Dashboard(props) {
	const userData = props.user;
	const history = useNavigate();

	const [CarData, setCarData] = useState({});
	const [CarNumbers, setCarNumbers] = useState({});
	const [Makats, setAllMakats] = useState({});
	const [AllKshirot, setAllKshirot] = useState({});

	function useCarDatas() {
		let arg = "";
		if (userData.isManager === 1) {
			arg = "http://localhost:5000/";
		} else if (userData.isManager === 0) {
			arg = "http://localhost:5000/" + userData.gdud + "";
		}
		fetch(arg, {
			method: "GET",
			// body: JSON.stringify(data),
			headers: {
				"Content-Type": "application.json",
			},
		})
			.then((res) => res.json())
			.then((item) => {
				console.log(item);
				setCarData(item);
				setCarNumbers(item.carNumbers);
				setAllMakats(item.allMakats);
				setAllKshirot(item.allKshirot);
				console.log(item.carNumbers);
				console.log(item.allMakats);
				console.log(item.allKshirot);
			});
	}

	function carAdd() {
		history("/add");
	}

	// useCarDatas();

	// console.log(CarData);

	return (
		<div>
			<div>
				{userData.isManager === 1 ? (
					<button onClick={carAdd}> add new car</button>
				) : null}
			</div>
			<div>
				<KshirotTable
					carNumber={CarNumbers}
					kshirot={AllKshirot}
					getCarNumberKshirot={useCarDatas}
				/>
			</div>
			<div>
				<div /*will replace this with components when marging*/>
					<label htmlFor="chart">
						<h2>Percentage of tool avialabe</h2>
						<p /* avialabelP */>60%</p>
					</label>
				</div>
				<div>
					<label htmlFor="chart">
						<h2>Number of avialabe tools</h2>
						<p /* avialabel.length */>10</p>
					</label>
				</div>
				<div>
					<label htmlFor="chart">
						<h2>string</h2>
						<p /* to be filled */></p>
					</label>
				</div>
				<KshirotChart name="chart" />
			</div>
			<div>
				<KshirotClock />
			</div>
		</div>
	);
}

export default Dashboard;
