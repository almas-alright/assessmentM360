import * as dotenv from 'dotenv'
dotenv.config({
    path: `${__dirname}/../.env`
})
//type ENV = {APP_HOST: string; APP_PORT: number; DB: { CONNECTION: string; PORT: number; DATABASE: string; PASSWORD: string; HOST: string; USERNAME: string } }
export const env =
{
    APP_HOST: process.env.APP_HOST || '127.0.0.1',
    APP_PORT: process.env.APP_PORT || 3000,

    DB: {
        CONNECTION: process.env.DB_CONNECTION || 'mysql',
        HOST: process.env.DB_HOST || '127.0.0.1',
        PORT: process.env.DB_PORT || 3306,
        DATABASE: process.env.DB_DATABASE || 'homestead',
        USERNAME: process.env.DB_USERNAME || 'root',
        PASSWORD: process.env.DB_PASSWORD || 'secret',
    }
}