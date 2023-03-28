const redis = require("redis");
const { REDIS_HOST, REDIS_PORT } = require("./env");

const db = redis.createClient({
	host: REDIS_HOST,
	port: REDIS_PORT,
	reconnectStrategy() {
		return new Error("Retry time exhausted");
	}
});

db.on("error", (err) => console.error(err));

db.connect();

process.on("SIGINT", async () => {
	if (db.isOpen) await db.quit();
});

module.exports = db;
