import express from 'express';
import cors from 'cors';
import dotEnv from 'dotenv';
import todoRoute from './routes/todoRoute';
import { monogoConnect } from "./config/db_config";

// configure environment 
dotEnv.config()
const port = process.env.PORT || 4000;

const app = express()

app.use(cors());

app.use(express.json());

app.use('/', todoRoute);

const startServer = async () => {
    try {
        await monogoConnect();
        app.listen(port, () => {
            console.log(`Server started on http://localhost:${port}`);
        });
    } catch (error) {
        console.log(`Unable to connect to database at the moment`);
    }
}

startServer();