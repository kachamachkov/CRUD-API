# CRUD-API
RESTful API with full CRUD functionality.


## How to install:
Clone the project on your machine and CD into it. Open new terminal and run:
```bash
npm i
npm start
```

## Features
* CRUD Operations:
  * All requests are sent to /api/products or /api/products/:id
  * Supported requests are GET, POST, PUT, DELETE
  * Successfull requests are saved within the MongoDB instance connected to the Express API
* Navigate to http://localhost:3000/api/products in your browser to see the list of all products as JSON objects.
* Navigate to http://localhost:3000/api/products/:id to check a single product by a valid id.
* You can test the API with a tool like Postman and send CRUD requests to the product resource URL

