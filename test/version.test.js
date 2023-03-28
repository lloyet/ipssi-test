const request = require("supertest");
const assert = require("assert");
const { app } = require("../index");

request(app)
	.get("/version")
	.expect("Content-Type", /json/)
	.expect(200)
	.end((err, res) => {
		if (err) throw err;

		assert.strictEqual(res.body.version, "1.0.0");
	});
