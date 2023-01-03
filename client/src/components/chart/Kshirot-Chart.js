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
import faker from "faker";

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
		responsive: true,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "kshirot",
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
				label: /*when passing as an function props.nameChart */ "kshirot gdud ",
				data: labels.map(() => props.makatP({ min: 0, max: 100 })),
				borderColor: "rgb(255, 99, 132)",
				backgroundColor: "rgba(255, 99, 132, 0.5)",
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
