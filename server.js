// * requiring modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { application } = require("express");
const { json } = require("body-parser");
const Axios = require("axios").default;

// * mongoose database setup
mongoose.connect("mongodb://127.0.0.1/finalProjectDB", {
	useNewUrlParser: true,
});

// * setting modules
mongoose.set("strictQuery", false);
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); //create a public folder put inside every static page (CSS and pure html)

// ----------------------------------- database handeling -----------------------------------------------------------------------------------

// * setting a Schema for the database

const userSchema = new mongoose.Schema({
	//settings

	pernr: String,
	gdud: String,
	isManager: Number,
});

const carDataSchema = new mongoose.Schema({
	//settings

	carNumber: Number,
	makat: Number,
	kshirot: Number,
	gdud: String,
});

//setting collection

const carData = mongoose.model("carData", carDataSchema);

const User = mongoose.model("User", userSchema);

// const user = new User({
// //schema...
//    pernr: "",
//    gdud: "",
//    isManager :
// });

//----------------------------------------- helping functions --------------------------------------------------------------------------------------------

function removeDuplicates(arr) {
	return arr.filter((item, index) => arr.indexOf(item) === index);
}

async function fetchText(urlA) {
	try {
		const resp = await Axios.post(urlA);
		if (resp.value === undefined) {
			console.log("has no value");
		} else {
			console.log(resp.json());
		}
	} catch (error) {
		console.log(error);
	}
}

//* ---------------------------------------- login page --------------------------------------------------

app
	.route("/login/:id")

	.get(function (req, res) {
		User.findOne({ pernr: req.params.id }, (er, foundUser) => {
			if (er) {
				console.log(er);
			} else {
				console.log(foundUser);
				res.send(foundUser);
			}
		});
	});

// * ---------------------------------------- addCar page --------------------------------------------------

app
	.route("/addcar")

	.get(function (req, res) {})

	.post((req, res) => {
		console.log(req.cache);
	});

//*---------------------------------------- Dashboard no menger page (kashirot) --------------------------------------------------

app
	.route("/kashirot/:gdud/:makat/:kashir")

	.get(function (req, res) {
		carData.find({ gdud: req.params.gdud }, (er, foundKashir) => {
			if (er) {
				console.log(er);
			} else {
				const makatOverAll = foundKashir.map((obj, index) => {
					if (foundKashir[index].makat == req.params.makat) {
						return foundKashir[index].makat;
					} else {
						// console.log(foundKashir[index].makat);
					}
				});

				// console.log(makatOverAll);

				// * --------------------------------------- getting the kshirot of the makat -----------------------------------------------

				const makatAv = foundKashir.map((obj, index) => {
					if (
						foundKashir[index].makat == req.params.makat &&
						foundKashir[index].kshirot == req.params.kashir
					) {
						return foundKashir[index].makat;
					} else {
						// console.log(foundKashir[index].makat);
					}
				});
				// console.log(makatAv);

				// * ------------------------- removeing undefinded data ----------------------------------------------------

				function removeUndefined(arr) {
					return arr.filter((item, index) => item != undefined);
				}

				const makatOverAllRE = removeUndefined(makatOverAll);
				const makatAvRE = removeUndefined(makatAv);

				// console.log(makatAvRE.length);
				// console.log(makatOverAllRE.length);

				const makatPr = Math.floor(
					(makatAvRE.length / makatOverAllRE.length) * 100
				);
				// console.log(makatPr);
				// ---------------------------- sending data --------------------------------------------------
				res.send({
					makatAvil: makatAvRE,
					makatGdud: makatOverAllRE,
					makatP: makatPr + "%",
				});

				//  ! ------------------------------- alternative --------------------------------------------------------------

				// 	carData.find({ gdud: req.params.gdud }, (er, foundKashir) => {
				// 		if (er) {
				// 			console.log(er);
				// 		} else {
				// 			carData.find(
				// 				{
				// 					gdud: req.params.gdud,
				// 				},
				// 				{ makat: req.params.makat },
				// 				(err, found) => {
				// 					if (err) {
				// 						console.log(err);
				// 					} else {
				// 						console.log(req.params.gdud);
				// 						console.log(req.params.makat);
				// 						console.log(req.params.kashir);
				// 						console.log(found.length);
				// 						console.log(foundKashir.length);
				// 						res.send({
				// 							makatAvil: foundKashir.length,
				// 							makatGdud: found.length,
				// 						});
				// 					}
				// 				}
				// 			);
				// 			}
			}
		});
	});
// * --------------------- dashboard -----------------------------------------
app
	.route("/:gdud")

	.get(function (req, res) {
		carData.find({ gdud: req.params.gdud }, (err, foundCars) => {
			if (err) {
				console.log(err);
			} else {
				// console.log(req.params.type);

				// * checking if getting all the carnumber in the gdud

				/*

				console.log(
					foundCars.map((ele, index) => {
						return foundCars[index].carNumber;
					})
				);

				*/

				// ---------------------------------------------------------------------------------------------------------------------------

				// * getting all the makats in the gdud
				let makat = foundCars.map((ele, index) => {
					return foundCars[index].makat;
				});

				const makatFilterdN = removeDuplicates(makat);
				const makatFilterd = makatFilterdN.map((num) => {
					return String(num);
				});

				// console.log(makatFilterd);

				//* getting all the carnumber in the gdud
				carNumbers = foundCars.map((ele, index) => {
					return foundCars[index].carNumber;
				});

				// * --------------------- sending data ------------------------------------------------------------------------------------------------------

				res.send({
					carNumbers: foundCars.map((ele, index) => {
						return foundCars[index].carNumber;
					}),
					allMakats: makatFilterd,

					allKshirot: foundCars.map((ele, index) => {
						return foundCars[index].kshirot;
					}),
				});
			}
		});
	});

// ! ------------------------------------------  landing ismaneger page --------------------------------------------------

app
	.route("/")

	.get(function (req, res) {});
// * ---------------------------------------- running server --------------------------------------------------

app.listen(5000, function () {
	console.log("server is running at port 5000");
});
