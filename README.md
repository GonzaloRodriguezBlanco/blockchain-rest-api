# RESTful Web API with Node.js Framework

This is the repository for the RESTful Web API with Node.js Framework Project included in the [Blockchain Developer Nanodegree](https://www.udacity.com/course/blockchain-developer-nanodegree--nd1309) at Udacity.

## Framework
This project has been developed with Express.

Execute the following command to start the server:
```bash
PORT=8000 npm start
```

The server will be listening on http://localhost:3000
## Endpoint

The operations provided by this project are:

```
GET http://localhost:8000/block/:height
```

where :height is an integer number.

```
POST http://localhost:8000/block

Content-Type: application/json

Body:
{ "data": "New block" }

```