import {env} from "./env";
import express from 'express';
import cors from 'cors';

const allowedOrigins = ['http://localhost:3000']
const corsOptions : cors.CorsOptions = { origin: allowedOrigins };
const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.listen(env.PORT, () => { console.log('app runs on : ', env.PORT) })
