import express from 'express';
import cors from 'cors';
import Router from './Routes/routes.js';
import { Connection } from './Database/db.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();
dotenv.config();// Load environment variables from .env file


app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Router);

const username = process.env.DB_Username;
const password = process.env.DB_Password;
Connection(username, password);

app.listen("8080", () => {
    console.log("App is listening at port 8080");
});
