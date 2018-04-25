# PRS WebAPI Server (Node)

This is a JSON WebAPI server written in Node. It is used for providing a service for students of Angular to access.

## Instruction

To run the service, at the root of the project, type:

`npm start`

This starts the server on port 5000. In the browser URL, type:

`http://localhost:5000`

## APIs Available

* /Users/List - return an array of User objects
* /Users/Get/5 - return a User object (5 is the id)
* /Users/Create - add a User (User object in body)
* /Users/Change - change a User (User object in body)
* /users/Remove - remove a User (User object in body)

## Data returned

All the APIs return a JSON object:

```
{
  rs: [returncode],
  msg: [returnmessage],
  data: [returneddata]
}
```

data is returned on List and Get. It is null on Create, Change, and Remove