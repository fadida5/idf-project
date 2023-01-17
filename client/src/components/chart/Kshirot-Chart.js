import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

export function KshirotChart(props) {
	const options = {
		color: "#ffffff",
		responsive: true,
		scales: {
			y: {
				ticks: { color: "#ffffff", beginAtZero: true },
				grid: { color: "#ffffff", beginAtZero: true },
			},
			x: {
				ticks: { color: "#ffffff", beginAtZero: true },
				grid: { color: "#ffffff", beginAtZero: true },
			},
		},
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "kshirot " + props.gdudName,
				color: "#ffffff",
			},
		},
	};
	// todo wait for the todos in dashboard
	const labels = props.makats.map((item, index) => props.makats[index]);

	// ? --------- trying to make a function out of this ------------------
	// to make an array of datasets so when meneger etch gdud will be in diffrent format or color
	// function datasetsMaker(gdudN /*if manger enetr the array*/) {
	// 	const newData = {
	// 		label: "kshirot " + gdudN,
	// 		data: labels.map((x, index) =>
	// 			/*makatP[index]*/ faker.datatype.number({ min: 0, max: 100 })
	// 		),
	// 		borderColor: "rgb(255, 99, 132)",
	// 		backgroundColor: "rgba(255, 99, 132, 0.5)",
	// 	};

	// 	return newData;
	// }
	/*data = {
  labels,
  ;abels.map(() => datasetsMaker(gdud))
} */
	const data = {
		labels,
		datasets: [
			{
				label: "kshirot",
				data: labels.map((i, index) => props.makatP[index]),
				borderColor: "rgb(45, 205, 223)",
				backgroundColor: "rgb(108, 0, 255)",
			},
		],
	};

	return (
		<Bar
			data={data}
			options={options}
		/>
	);
}
