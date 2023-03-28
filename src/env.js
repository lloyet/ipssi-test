const dotenv = require("dotenv");

dotenv.config();

const REDIS_HOST = process.env.REDIS_HOST ?? "localhost";
const REDIS_PORT = process.env.REDIS_PORT ?? "6379";
const PORT = process.env.PORT ?? "3000";

module.exports = {
	REDIS_HOST,
	REDIS_PORT,
	PORT
};
