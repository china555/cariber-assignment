import { Pool } from "pg";

require("dotenv").config();

const pgClient = new Pool({
  host: process.env.HOST_POSTGRESQL,
  user: process.env.USER_POSTGRESQL,
  port: Number(process.env.PORT_POSTGRESQL),
  password: process.env.PASSWORD_POSTGRESQL,
  database: process.env.DATABASE_POSTGRESQL,
});

export default pgClient