# Huntdora-server
This server was built to support the [Huntdora Jobsearch frontend](https://github.com/serendatapy/huntdora). 

It implements a mongo db to store user's saved jobs, and Auth0 to protect such routes. Furthermore it acts as a proxy for the API.

I chose to use a mongoDB to enable me to store JSON data received from the ReedAPI directly with little structuring. 

Auth0 stores user data and tokens, such that
1. There is stronger security in that no passwords or personal data are stored in the frontend or backend
2. It enables the use of social logins (atm just google), which can be expanded in the future.

## Running Huntdora-Server
To run it locally, you'll need to setup an Auth0 Account, and get a reed.co.uk developer API key that will enable you to connect the frontend with the backend.
Clone/download the repo:
From the root folder

```
npm install
npm start
```

In the .env file you'll need the following environment variables. You'll also need the [Huntdora Frontend](https://github.com/serendatapy/huntdora), with the corresponding environment variables. 

```
DB_URL=(you mongo db string)
DB_NAME=huntjobs
API_KEY=(reed.co.uk api key)
BASE_URL=https://www.reed.co.uk/api/1.0
PORT=3001
CLIENT_ORIGIN_URL=(follow instructions on auth0 to setup)
AUTH0_AUDIENCE=(follow instructions on auth0 to setup)
AUTH0_DOMAIN=(follow instructions on auth0 to setup)
```
## Room for improvement
Checkout Github issues to see what needs work
