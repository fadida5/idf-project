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
/*
geting gdud from the server

the data that gets from the server -> carDatas.find({gdud:{$exists:true},
{gdud:foundUser.gdud}, (er,foundCars) =>{
.
.
.
#sending foundCars.carNumber , foundCars.kshirot, gdud , foundCars.makat
geting
const carNumber = foundCars.carNumber
const makat = foundCars.makat
const kshirot = foundCars.kshirot
makat.sort();
 function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);}
    
makats = removeDuplicates(makat)

doing the same in the backend to get an array of all the makatim
// backend
const makatAvial = makats.map((mk) =>{
carDatas.find ({gdud:foundUser.gdud},{makat:mk},{kshirot:1},
  (error,foundAvi) =>{
    if error {
      console.log(error)
    } else {
      return foundAvi.length
    }
  })
})
const makatOverall = makats.map((mk) =>{
carDatas.find ({gdud:foundUser.gdud},{makat:mk},
  (error,foundOver) =>{
    if error {
      console.log(error)
    } else {
      return foundOver.length
    }
  })
})
const makatP = []
for (let index = 0; index < makatAvial.length; index++) {
  makatP.push(Math.floor((makatAvial[index]/makatOverall[index])*100));
}
push makatP

const avialabel = kshirot.filter((kashir) => kashir === 1 )
const avialabelP = Math.floor((avialbel.length/kshirot.length)*100)




if meneger the data that will be passed will be allCars from
carDatas.find({gdud:{$exists:true}, (err,allCars) =>{
  .
  .
  .
}}
and gdud parmeter will be an array
*/

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
