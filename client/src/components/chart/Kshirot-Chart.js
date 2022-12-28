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

export const options = {
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

const labels = /* makats.map( makatNum => num.toString( makatNum)) */ [
	"131585",
	"997102",
	"603222",
	"949385",
	"173148",
	"318611",
	"596830",
];
// to make an array of datasets so when meneger etch gdud will be in diffrent format or color
function datasetsMaker(gdudN /*if manger enetr the array*/) {
	const newData = {
		label: "kshirot " + gdudN,
		data: labels.map((x, index) =>
			/*makatP[index]*/ faker.datatype.number({ min: 0, max: 100 })
		),
		borderColor: "rgb(255, 99, 132)",
		backgroundColor: "rgba(255, 99, 132, 0.5)",
	};

	return newData;
}
/*data = {
  labels,
  ;abels.map(() => datasetsMaker(gdud))
} */
export const data = {
	labels,
	datasets: [
		{
			label: /*when passing as an function props.nameChart */ "kshirot gdud ",
			data: labels.map(() => faker.datatype.number({ min: 0, max: 1 })),
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
	],
};

export function KshirotChart() {
	return (
		<Bar
			options={options}
			data={data}
		/>
	);
}
