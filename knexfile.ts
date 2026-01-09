// knexfile.ts
import dotenv from "dotenv";
dotenv.config();

import type { Knex } from "knex";

const config: Knex.Config = {
  client: "pg",
  connection: {
    host: process.env.PG_HOST as string,
    port: Number(process.env.PG_PORT),
    user: process.env.PG_USER as string,
    password: process.env.PG_PASSWORD as string,
    database: process.env.PG_DATABASE as string,
  },
  pool: { min: 2, max: 10 },
  migrations: {
    extension: "ts",
    directory: "./src/database/migrations",
  },
  seeds: {
    extension: "ts",
    directory: "./src/database/seeds",
  },
};

export default config;
