const express = require("express");
const { PORT } = require("././env");
const db = require("./db");

const app = express();

app.get("/version", (req, res, next) => {
	res.json({
		version: "1.0.0"
	});
});

module.exports = {
	server: app,
	async start() {
		app.listen(PORT, () => {
			console.log(`Listening on port ${PORT}`);
		});

		await db.connect();
	}
};
