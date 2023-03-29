const redis = require("redis");
const { REDIS_HOST, REDIS_PORT } = require("./env");

const db = redis.createClient({
	host: REDIS_HOST,
	port: REDIS_PORT,
	reconnectStrategy() {
		return new Error("Retry time exhausted");
	}
});

db.on("error", (err) => {
	console.error(err);
}).on("connect", () => {
	console.log(`Connected to redis://${REDIS_HOST}:${REDIS_PORT}`);
});

process.on("SIGINT", async () => {
	if (db.isOpen) await db.quit();

	process.exit(0);
});

module.exports = db;
