import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export function KshirotClock(props) {
	ChartJS.register(ArcElement, Tooltip, Legend);

	const Options = {
		plugins: {
			// 'legend' now within object 'plugins {}'
			legend: {
				labels: {
					color: "#ffffff",
					font: {
						size: 18,
					},
				},
			},
		},
		confirmOptions: {
			scales: {
				x: {
					stacked: true,
					ticks: {
						beginAtZero: true,
					},
				},
				y: {
					stacked: true,
				},
			},
		},
	};

	const data = {
		labels: ["unavailable", "available"],
		datasets: [
			{
				label: "# of makat kashir",
				data: [props.unavilP, props.avilP],
				backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
				borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
				borderWidth: 1,
			},
		],
	};

	return (
		<Doughnut
			data={data}
			options={Options}
		/>
	);
}
