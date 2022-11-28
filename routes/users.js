var express = require("express");
var router = express.Router();
const connection = require("../database");

/* GET users listing. */
router.get("/", function (req, res, next) {
	connection.query("SELECT * from mahasiswa", function (err, results, fields) {
		if (err) {
			console.log("database error");
		}

		const data = {
			mahasiswa: JSON.parse(JSON.stringify(results)),
			title: "users",
		};
		res.render("mahasiswa", data);
	});
});

router.post("/", function (req, res, next) {
	console.log(req.body);
	const nama = req.body.nama;
	const nim = req.body.nim;
	const jurusan = req.body.jurusan;
	connection.query(
		`insert into mahasiswa (nama,nim,jurusan) value('${nama}','${nim}', '${jurusan}')`,
		function (err, results, fields) {
			console.log("results :", results);
		}
	);
	console.log("asdfa");
	return res.redirect("http://localhost:3000/users");
});

router.get("/all", function (req, res, next) {
	connection.query("SELECT * from mahasiswa", function (err, results, fields) {
		if (err) {
			console.log("database error");
		}
		console.log(results);
		res.json(results);
	});
});

module.exports = router;
