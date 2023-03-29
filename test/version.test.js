const request = require("supertest");
const assert = require("assert");
const { describe, it, beforeEach, afterEach } = require("mocha");
const { server } = require("../src/app");
const db = require("../src/db");

describe("Testing version", () => {
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

describe("Testing DB", () => {
	beforeEach(async () => {
		await db.connect();
	});

	afterEach(async () => {
		if (db.isOpen) await db.quit();
	});

	it("Is REDIS db connection is open", (done) => {
		assert.strictEqual(db.isOpen, true);

		done();
	});
});
