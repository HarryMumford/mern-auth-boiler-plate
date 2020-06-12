# Mern auth boiler plate

## Description

A boiler plate complete with react-redux client side state handling, custom authentication middleware using jwt web token. Unit tested RESTful api routes with mocked database. Modern es6/7 js syntax was used both in the backend and frontend, utilizing react >16.8's hooks, es7 async await syntax for clean, readable code. The backend is structured for development, testing and production environments and is ready to be hosted on Heroku.

## Demo

## Tech

**Backend**

- Mongodb
- Express
- Node

**Client**

- React
- React-redux

**Testing**

- Supertest
- Mocha
- Chai

**Additional libraries**

- JWT webtoken
- babel
- mockgoose
- Eslint
- Morgan
- concurrently
- axios
- reactstrap
- uuid
- redux-thunk

## Todo

- [x] Setup express server, react and run them together with concurrently
- [x] Setup Mongodb
- [x] Setup Airbnb style eslint
- [x] Test api routes with insomnia
- [x] Restructure to make app deployable to heroku
- [x] Deploy
- [x] Add authentication routes to api using jwt token
- [x] Build custom auth middleware
- [x] Write redux boiler plate
- [x] Implement sign up with error handling
- [x] Implement login with error handling
- [x] Style navbar and auth modals with reactstrap
- [x] Convert class components to functional components, utilizing react and react-redux hooks
- [ ] Unit test api using supertest mocha and chai
- [ ] Test front-end using enzyme?
