# nodejs-uber-oop
First implementation of uber-like object-oriented web application.


## Technologies Used

**Client:** Vue 3 Composition API, Pinia

**Server:** NodeJS, Express, MongoDB, Pug

**Testing:** Jest

**Deployment:** Docker, Google Cloud Run, MongoDB Atlas

## Demo

Live on: https://front-end-ue5hunfyyq-ew.a.run.app/

### An Example End-Point
https://back-end-ue5hunfyyq-ew.a.run.app/passengers

## Example Requests

### POST
    https://back-end-ue5hunfyyq-ew.a.run.app/passengers HTTP/1.1
    content-type: application/json

    {"name":"Burak", "location": "7.cadde"}

### GET

    https://back-end-ue5hunfyyq-ew.a.run.app/passengers/62ff21afb8951bc52ab032f7 HTTP/1.1

### DELETE
    https://back-end-ue5hunfyyq-ew.a.run.app/passengers/630a6c1943713a00cb40e26c HTTP/1.1

### PATCH

    https://back-end-ue5hunfyyq-ew.a.run.app/passengers/5e9de4cd9f11eb7402e56941 HTTP/1.1
    content-type: application/json

    {"name": "new name4"}

### POST
    https://back-end-ue5hunfyyq-ew.a.run.app/drivers HTTP/1.1
    content-type: application/json

    {"name":"Ahmet", "age": 35, "location": "Bilkent"}

### DELETE 
    https://back-end-ue5hunfyyq-ew.a.run.app/drivers/5ea70bf063b0877147bd3e6b HTTP/1.1

### POST 
    https://back-end-ue5hunfyyq-ew.a.run.app/passengers/62ff31ad941cd7fb0061b079/bookings HTTP/1.1
    content-type: application/json

    {"driverId": "62ff21f1b8951bc52ab032fc", "origin": "asdada", "destination": "asdasda"}

### PATCH 
    https://back-end-ue5hunfyyq-ew.a.run.app/drivers/5ea70c8063b0877147bd3e6c HTTP/1.1
    content-type: application/json

    {"name": "a newer surname"}
