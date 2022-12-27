import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// geting gdud from the server

//the data that gets from the server -> carDatas.find({gdud:{$exists:true},
//{gdud:foundUser.gdud}, (er,foundCars) =>{
// .
// .
// .
// #sending foundCars.carNumber , foundCars.kshirot, gdud
// geting
// const carNumber = foundCars.carNumber
// const kshirot = foundCars.kshirot
// gdud
//if meneger the data that will be passed will be allCars from
//carDatas.find({gdud:{$exists:true}, (err,allCars) =>{
//   .
//   .
//   .
// }}
// and gdud parmeter will be an array
// const unavail = kshirot.filter(kashrr => kashir === 0));
// const avail = kshirot.filter(kashrr => kashir === 1));
// const availP = Math.floor((avail.length/(kshirot.length))*100);
// const unavailP = Math.floor((unavail.length/(kshirot.length))*100);
//
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
	labels: ["unavailable", "available"],
	datasets: [
		{
			label: "# of Votes",
			data: [12 /*unavilP*/, 19 /*avilP*/],
			backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
			borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
			borderWidth: 1,
		},
	],
};

export function KshirotClock() {
	return <Doughnut data={data} />;
}
