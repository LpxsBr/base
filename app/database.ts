import { neon } from "@neondatabase/serverless";
import { Pool } from "pg";

export async function getData() {
  const sql = neon(String(process.env.DATABASE_URL));
  const data = await sql`...`;
  return data;
}

export class Database {
  protected _con;

  constructor() {
    this._con = new Pool({
      connectionString: process.env.DATABASE_URL, // sua URL do Neon Serverless
      ssl: {
        rejectUnauthorized: false, // importante para conexões com Neon
      },
    });

    this._con.connect();
  }

  query(sql: string = "", args: Array<any> = []) {
    return this._con.query(sql, args);
  }

  async begin() {
    return await this._con.query("BEGIN");
  }

  async rollback() {
    await this._con.query("ROLLBACK");
    return;
  }

  async save() {
    await this._con.query("COMMIT");
    return;
  }
}
