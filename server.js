// requiring modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { application } = require("express");
const { json } = require("body-parser");
const Axios = require("axios").default;

// mongoose database setup
mongoose.connect("mongodb://127.0.0.1/finalProjectDB", {
	useNewUrlParser: true,
});

//setting modules
mongoose.set("strictQuery", false);
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public")); //create a public folder put inside every static page (CSS and pure html)

//setting a Schema for the database

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

//---------------------------------------- login page --------------------------------------------------

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

//---------------------------------------- addCar page --------------------------------------------------

app
	.route("/addcar")

	.get(function (req, res) {})

	.post((req, res) => {
		console.log(req.cache);
	});

//---------------------------------------- landing no menger page --------------------------------------------------

//------------------------------------------ landing ismaneger page --------------------------------------------------

// app
// 	.route("/kashir/:gdud/:makat/:kashir")

// .get(function (req, res) {
// 	carData.find(
// 		{ gdud: req.params.gdud },
// 		{ makat: req.params.makat },
// 		{ kshirot: req.params.kashir },
// 		(er, foundKashir) => {
// 			if (er) {
// 				console.log(er);
// 			} else {
// 				console.log(foundKashir);
// 				res.send(
// 					foundKashir.map((ele, index) => {
// 						return foundKashir[index].makat;
// 					})
// 				);
// 			}
// 		}
// 	);
// });

app
	.route("/:gdud")
	// todo : to get kshirot i can try to run a reducer function on the data after doing map and changing it to num insted of string to  get the sum of the 1 and 0, and also i can use that to make the 0s 1s to get the over all length of the array (because i can't get its length with .length for some resone)
	.get(function (req, res) {
		carData.find({ gdud: req.params.gdud }, (err, foundCars) => {
			if (err) {
				console.log(err);
			} else {
				// console.log(req.params.type);

				console.log(
					foundCars.map((ele, index) => {
						return foundCars[index].carNumber;
					})
				);
				let makat = foundCars.map((ele, index) => {
					return foundCars[index].makat;
				});

				function removeDuplicates(arr) {
					return arr.filter((item, index) => arr.indexOf(item) === index);
				}

				const makatFilterdN = removeDuplicates(makat);
				const makatFilterd = makatFilterdN.map((num) => {
					return String(num);
				});

				// console.log(makatFilterd);

				carNumbers = foundCars.map((ele, index) => {
					return foundCars[index].carNumber;
				});

				allMakats = makatFilterd;

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

//------------------------------------------ landing ismaneger page --------------------------------------------------

app
	.route("/")

	.get(function (req, res) {});
//---------------------------------------- running server --------------------------------------------------

app.listen(5000, function () {
	console.log("server is running at port 5000");
});
