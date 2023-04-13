import type { Knex } from "knex";
import {env} from "../env";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: env.DB.HOST,
      port: 3306,
      user: env.DB.USERNAME,
      password: env.DB.PASSWORD,
      database: env.DB.DATABASE
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  staging: {
    client: 'mysql2',
    connection: {
      host: env.DB.HOST,
      port: 3306,
      user: env.DB.USERNAME,
      password: env.DB.PASSWORD,
      database: env.DB.DATABASE
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      host: env.DB.HOST,
      port: 3306,
      user: env.DB.USERNAME,
      password: env.DB.PASSWORD,
      database: env.DB.DATABASE
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};

module.exports = config;
