const request = require("supertest");
const assert = require("assert");
const { describe, it } = require("mocha");
const { server } = require("../src/app");

describe("Test version", () => {
	it("Is version available", (done) => {
		request(server)
			.get("/version")
			.expect("Content-Type", /json/)
			.expect(200)
			.end((err, res) => {
				if (err) return done(err);

				assert.strictEqual(res.body.version, "1.0.0");

				return done();
			});
	});
});
