# Auth API

A simple authentication Node API.

Deployed API URL: https://auth-api-node.herokuapp.com/

## Installation

You're gonna need Node 12 to run the project, if you have [nvm](https://github.com/nvm-sh/nvm) installed you can just run the command

```bash
$ nvm use
```

To install the project dependencies

```bash
$ npm i
```

And to run it locally

```bash
$ npm run dev
```

You can change the mongodb uri (the default in the code is read-only access) by giving it to the env variable DB_URI like the exemple bellow

```bash
$ DB_URI=mongodb://localhost:27017/mydb npm run dev
```

## Endpoints

| Method | Endpoint      | Data to be send                                                                                                                          | Description              |
| ------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| post   | /sign-up      | Body: { name: "string", email: "string", password: "password",phones: [ {number: "123456789", ddd: "11" },{number: "121219",ddd: "12"}]} | Sign up a new user       |
| post   | /sign-in      | Body: { email: "string", password: "password"}                                                                                           | Sign in an existing user |
| get    | /user/:userId | Headers: Bearer Token                                                                                                                    | Get user data            |

When calling the sign-up or sign-in endpoints, you're going to receive a token, which will expires in 30 minutes (can be configurable via env variable TOKEN_EXPIRATION_TIME), any request in the enpoint /user/:userId is gonna need a Bearer Token, which is the one returned in the previous said endpoints.
