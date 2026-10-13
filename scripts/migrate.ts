import { pool } from "../lib/db";import {readFileSync}from "node:fs";await pool.query(readFileSync("db/migrations/001_initial.sql","utf8"));await pool.end();console.log("Migrasi LMS selesai");
