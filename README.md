`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make sparate tests folder)

Lets take a look inside the `src` folder

    `config` -> In this folder everything regarding any configurations and setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in the application., this is done in the `server-config.js`. One more example can be bto setup your logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here.

    `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers middleware and controllers to it.

    `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc.

    `controllers` -> they are kind of the last middlewares as post them you call the business layer to execute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

    `repositories` -> This folder contains all the logic which we need to interact with the DB by writing queries, all the raw queries or ORM queries will go here

    `services` -> contains the business logic and interacts with repositories for data from DB.

    `utils` ->contains helper methods, error classes etc.

### Setup the project

    Download this template from github and open it in your IDE.
    Go inside the folder path and execute the following command:
    ```
    npm install
    ```
    In the root directory create a `.env` file and add the following env variables

    ```
        PORT=<port number of your choice>
    ```

    In the `src/config` folder create a file named as config.json  and write the following code:

    ```
    {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

    ```

  - go inside the `src` folder and execute the following command:
    ```
    npx sequelize init
    ```
  - By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder.

  -  If you are setting up your development environment, then write the username of your DB, password of your DB and in dialect mention whatever DB you are using for ex: mysql, mariadb etc.
    If you are setting up test or prod environment , make sure you also replace the host with hosted db url .

    To run the server execute
    ```
    npm start
    ```
