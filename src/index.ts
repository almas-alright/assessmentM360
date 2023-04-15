import {env} from "./env";
import express from 'express';
import cors from 'cors';
import router from "./routes";
const allowedOrigins = ['http://localhost:3000']
const corsOptions : cors.CorsOptions = { origin: allowedOrigins };
const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.listen(env.APP_PORT, () => {
    console.log('app runs on : ', env.APP_PORT)
    app.use(router)
})

import db from "../src/db";
import Product from "./models/Product";
// Product.knex(db)
 // const insert = async () => { await db('products').insert({title: 'Slaughterhouse Five'})}
 // const insert = async () => { await Product.query().insert({ title: 'BSlaughterhouse Five'}) }

 // insert();
