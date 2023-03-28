const request = require("supertest");
const { app } = require("../index");

request(app)
	.get("/version")
	.expect("Content-Type", /json/)
	.expect(200)
	.end((err, res) => {
		if (err) throw err;
	});
