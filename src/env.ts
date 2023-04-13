import * as dotenv from 'dotenv'
dotenv.config({
    path: `${__dirname}/../.env`
})

export const env = {
    HOST: process.env.APP_HOST || '127.0.0.1',
    PORT: process.env.APP_PORT || 5000,

    DB: {
        CONNECTION: process.env.DB_CONNECTION || 'mysql',
        HOST: process.env.DB_HOST || '127.0.0.1',
        PORT: process.env.DB_PORT || 3306,
        DATABASE: process.env.DB_DATABASE || 'homestead',
        USERNAME: process.env.DB_USERNAME || 'root',
        PASSWORD: process.env.DB_PASSWORD || 'secret',
    }
}