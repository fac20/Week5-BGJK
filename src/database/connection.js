const pg = require("pg");
const dotenv = require("dotenv");

// get variables from .env file
dotenv.config();

//change the active database depending on if we are testing or not
let connectionString = process.env.DATABASE_URL;
if (process.env.NODE_ENV === "test") {
  connectionString = process.env.TEST_DATABASE_URL;
}

// creat pool of connections to database
const db = new pg.Pool({
  connectionString,
});

//export for use elsewhere
module.exports = db;
