const express = require("express");

const app = express();

app.get("/version", (req, res, next) => {
	res.json({
		version: "1.0.0",
	});
});

/*app.listen("3000", () => {
	console.log("Listening on port 3000");
});*/

module.exports = {
	app,
};
