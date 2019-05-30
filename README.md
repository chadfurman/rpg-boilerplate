# RPG Boilerplate
## Relay, PostgreSQL, Graphile (GraphQL)

#### Danger: This boilerplate is outdated and should only be used for inspiration
There is an effort underway to revamp the boilerplate, and you can contribute to the new boilerplate here: https://github.com/clevertech/boilerplate/tree/rpg-next

###### A Modern Frontend and API Boilerplate

This boilerplate provides a starting point for developers, especially the community of [Postgraphile](https://www.graphile.org/postgraphile) developers, to build applications powered by Relay Modern.

[GraphQL](http://graphql.org/) and [Relay Modern](https://facebook.github.io/relay/docs/relay-modern.html) 
allow fast, modular apps.  For more on how they work, check out the respective links.

-----
#### Requirements
* [Docker Compose](https://docs.docker.com/compose/) (tested on v1.14.0)
* [Node](https://nodejs.org) (tested on v8.5.0)
* [Yarn](https://yarnpkg.com) (tested on v0.27.5)
* [Sqitch](https://github.com/theory/sqitch) (tested on v0.9995)

#### Things to change
* copy `rpg-boilerplate/example_docker-compose.yml` to `rpg-boilerplate/docker-compose.yml`
* Set the secrets in the `docker-compose.yml` file
* copy `api/env_example` to `api/.env`
* Set the secret in `api/.env`
* copy the `frontend/example_certs` and `api/example_certs` to `frontend/certs` and `api/certs` respectively
* Re-generate the `frontend/certs` and `api/certs`:
```
# to regenerate the certs:
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout rpg-boilerplate/frontend/certs/cert.key -out rpg-boilerplate/frontend/certs/cert.crt
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout rpg-boilerplate/api/certs/cert.key -out rpg-boilerplate/api/certs/cert.crt
```

> Note: you'll likely want to explore the components and views to implement further changes.  See below for tips on development using this boilerplate

#### Installation
```
# clone down the code
git clone https://github.com/chadfurman/rpg-boilerplate.git

# enter into the folder
cd rpg-boilerplate

# install dependencies
yarn install

# start docker to prep db
cd rpg-boilerplate && docker/run.sh

# after db init runs, docker will hang -- this is fine pending the next step
# in a new terminal, deploy migrations to db
cd rpg-boilerplate/db && sqitch deploy

# once migrations finish, ctrl-c docker-compose:
# you can now re-run when you are ready and everything should work
cd rpg-boilerplate && docker/run.sh

# navigate to https://localhost:3001/graphiql to verify API running
# navigate to https://localhost:3000/ to verify front-end running

```

## Running
```
# Start the app
cd rpg-boilerplate
docker/run.sh
```

> **Note:** The API and the Frontend SSR server both use HTTPS -- there should be a redirect, but at the moment it's not working.
> ** MAKE SURE YOU USE HTTPS ** :)

* Frontend: https://localhost:3000
* API: https://localhost:3001/graphql
* graphiql: https://localhost:3001/graphiql


## Development
### Overview
The application is divided into three primary directories: `/api`, `/frontend`, and `/db`

The `/api` folder contains the `src` of our GraphQL api -- if you look, you'll notice it simply attaches postgraphile and passes in our config from `api/.env`

the `/db` folder is interesting in that it contains the migrations (i.e. `db/deploy` / `db/revert`) and the sqitch.conf/sqitch.plan files

The frontend folder is further divided into three main parts: 
* `client` is the code that renders in the browser w/o the SSR server
* `server` is the code that runs on the SSR server
* `shared` is the code that runs on both, and is responsible for the UI of the website.

> **NOTE**: Given that the frontend client and server folders are pretty barren and the code therein is somewhat straight-forward, they do not require much explanation.  Take a look and see :)

### Shared Folder
The shared folder is broken up as follows:
* `components` - these are the bulk of the UI elements of the site.  Each component stores its own **stylesheet, images, JavaScript, and data dependency declarations**
* `relay` - houses the apiManager (sets/cancels our JWT during transit) and all of our mutations (queries are built into the components)
* `routes` - Each route file must be manually linked in `routes.js` -- more on routes below.
* `templates` - These are the general skeleton elements that multiple views will share
* `theme` - this folder contains global assets (like a background, not like a logo), and global CSS (reset rules, utility styles, scss variabls)
* `views` - these are the root component rendered for a route.  Each route has a view.  Each view is used by only one route.  Reusable aspects of views should be components.
* `App.js` - This separates public and private routes from eachother, querying for the currentProfile to determine if we're logged in or not.
* `BaseError.js` - An extensible error class
* `routes.js` - exports an array of imported route files to be matched by the SSR server and iterated over in App.js

### How to add a new route
TODO

### How to add a new mutation
TODO

### How to add a new component
TODO

### How to add a new view
TODO

### How to add a new migration
TODO

### How to rework an existing migration
TODO

### How to extend the GraphQL API
TODO

```
