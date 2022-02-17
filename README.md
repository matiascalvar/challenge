# ToDo App

ToDo App is a SPA made with Reactjs, Nestjs and PostgreSQL

## Deployed version
[Todos App](https://todos-nestjs.netlify.app/)

## Requirements

In order to execute this proyect you will need:
```bash
---> Node v14.17.6
---> npm v8.5.0
---> Nestjs v8.1.2
---> PostgreSQL v14.1 as well as psql
```

## Installation
1. First Option:

Assuming that your PostgreSQL is set:

* username:postgres 
* password:postgres 
* port: 5432
* host:localhost

-> open a new terminal on the main folder and run the next command:

```bash
bash start
```
It will connect to PostgreSQL, create the database, run the server and then it will run the Reactjs app.

2. Second Option:

You should config manually a database in PostgreSQL called "todos" and then connect it with the server in: api\src\app.module.ts

Then open a new terminal on the main folder and run the next command:
```bash
bash start
```

## Dependencies used

```
Node v14.17.6
Nestjs v8.1.2
pg v8.7.3
Typeorm v0.2.41

React v17.0.2
Axios v0.26.0
```

## Author
Matias Calvar