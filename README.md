# Auth-JWT

## 🗒 Description

[**Auth-JWT**](https://auth-jwt-antoxa566.vercel.app/) is a web application for check how authorization works with JWT tokens.

The project's primary goal is to understand in practice how the JWT tokens work.

## ⚙️ Technologies

The main frameworks and libraries used in the project are listed here. A complete list of technologies used for each part of the project is in the `package.json` file in the `client` and `server` folders.

### Common

1. ESLatest
2. [Git](https://git-scm.com/doc)
3. [REST API](https://www.restapitutorial.com/lessons/restquicktips.html)
4. [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token)
5. [npm](<https://en.wikipedia.org/wiki/Npm_(software)>)

### Frontend

1. [React](https://reactjs.org/docs/getting-started.html)
2. [Vite](https://vitejs.dev/)
3. [ESLint](https://eslint.org/docs/user-guide/getting-started)
4. [Mobx](https://mobx.js.org/README.html)
5. [Fontawesome](https://fontawesome.com/)
6. [Tailwindcss](https://tailwindcss.com/)
7. [Sass](https://sass-lang.com/guide/)
8. [Axios](https://axios-http.com/)

### Backend

1. [Node.js](https://nodejs.org/en/)
2. [Express](https://expressjs.com/)
3. [Sequelize](https://sequelize.org/)
4. [bcrypt](https://www.npmjs.com/package/bcrypt)
5. [cookie-parser](https://www.npmjs.com/package/cookie-parser)
6. [nodemon](https://www.npmjs.com/package/nodemon)
7. [dotenv](https://www.npmjs.com/package/dotenv)
8. [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

### Database

1. [PostgreSQL](https://www.postgresql.org/)

## ⬇️ Installation

1.  Get the latest stable version [Node.js](https://nodejs.org/en/ 'Node.js') (LTS). **Note:** npm will be installed automatically. Check the correctness of the installation: to do this, run in the command line (terminal):

    ```
    node -v  // for checking the Node.js version
    npm -v // for checking the npm version
    ```

3. Get the latest stable version [PostgreSQL](https://www.postgresql.org/download/ 'PostgreSQL') for your OS. Check the correctness of the work - try to create a database, a table - for this you can use [pgAdmin](https://www.pgadmin.org/ 'pgAdmin') or any other convenient way you find.

4. Create in PostgreSQL **empty** database for the project. For example, _auth-jwt_.

5.  Install [Git](https://git-scm.com/).

6.  Clone project`s [repo](https://github.com/AnToxa566/auth-jwt):

    ```
    git clone https://github.com/AnToxa566/auth-jwt.git
    ```

### Backend

1.  In the command line (terminal) go to the folder server:

    ```
    cd server
    ```

2.  In the server folder create a file **.env** and copy the contents of the file **.env.example** into it.

    **Note**: file **.env** contains real project keys and should not be saved to the repository.

    Replace in file **.env** key values to real.

3. Install all the dependencies with the command:

    ```
    npm install
    ```

4.  Run migrations to populate the database. To do this, in the command line (terminal) in the server folder, run:

    ```
    npm run db:sync
    ```

    Check the database.

5.  To start the server in the command line (terminal) in the server folder, run:

    ```
    npm run start
    ```

### Frontend

1.  In the command line (terminal) go to the `client` folder:

    ```
    cd client
    ```

2.  In the `client` folder create a file **.env** and copy the contents of the file into it **.env.example**.

    **Note**: file **.env** contains real project keys and should not be saved to the repository.

    Replace in file **.env** key values to real.

3. Install all the dependencies with the command:

    ```
    npm install
    ```

4.  To run the client from the command line (terminal) in the client folder, run:

    ```
    npm run dev
    ```

## 🔗 Links:

1. [Repo](https://github.com/AnToxa566/auth-jwt).
2. [Deploy](https://auth-jwt-antoxa566.vercel.app/).
