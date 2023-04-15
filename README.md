
# assessmentM360

<hr>  

### install
- cd yourDir/assessmentM360 `npm install`
- generate .env `npm run dotenv`
- set credentials to .env

    ```
    APP_NAME=assessmentM360  
    APP_HOST=localhost  
    APP_PORT=8000  
      
    NODE_ENV=development  
      
    DB_CONNECTION=mysql  
    DB_HOST=127.0.0.1  
    DB_PORT=3306  
    DB_DATABASE=homestead  
    DB_USERNAME=root  
    DB_PASSWORD=secret
    ```
  
 - you need to install [Knex](https://knexjs.org/)  on your local `pm install knex -g` (if installed skip this)
   
 - check migration status `knex migrate:status`
   
 - migrate all the db tables `knex migrate:latest`
   
 - seed tables `knex seed:run` (only attributes table will be seeded, you may skip)

 - now run `npm run watch` or `npm run start`
