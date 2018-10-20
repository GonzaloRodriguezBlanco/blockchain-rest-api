# RESTful Web API with Node.js Framework

This is the repository for the RESTful Web API with Node.js Framework Project included in the [Blockchain Developer Nanodegree](https://www.udacity.com/course/blockchain-developer-nanodegree--nd1309) at Udacity.

## Framework
This project has been developed with Express.

Execute the following command to start the server:
```bash
PORT=8000 npm start
```

The server will be listening on http://localhost:8000
## Endpoint

The operations provided by this project are:

### GET  /block/{height}

Retrieves a Block resource from the blockchain.

**Parameters**

- height (required) integer (path)

**Request**
 ```
 GET http://localhost:8000/block/0
 ```
**Responses**
- 200 Block resource response
    ```json
    {
      "hash": "6cf4a4288baadaf434d51fa258e4e499d85eb13d20c23fc6d641fdf34c128fc8",
      "height": 0,
      "body": "Genesis block",
      "time": "1540043175",
      "previousBlockHash": ""
    }
    ```
- 404 Resource not found
    ```json
    "Key not found in database [10]"
    ```

### POST  /block

Creates a Block resource in the blockchain.

**Parameters**

- blockData (required) (body)
    ```json
    { "data": "New block" }
    ```

**Request**
 ```
 POST http://localhost:8000/block
 
 Headers:
 Content-Type: application/json
 
 Body:
 { "data": "New block" } 
 ```
**Responses**
- 201 Block resource response
    ```json
    {
      "hash": "6cf4a4288baadaf434d51fa258e4e499d85eb13d20c23fc6d641fdf34c128fc9",
      "height": 1,
      "body": "New block",
      "time": "1540043178",
      "previousBlockHash": "6cf4a4288baadaf434d51fa258e4e499d85eb13d20c23fc6d641fdf34c128fc8"
    }
    ```
- 400 Bad request
    ```json
    "Bad request. You should provide a body."
    ```
