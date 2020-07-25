# Mern auth boiler plate

## Description

A boiler plate complete with react-redux client side state handling, custom authentication middleware using jwt web token. Unit tested RESTful api routes with mocked database. Modern es6/7 js syntax was used both in the backend and frontend, utilizing react 16.8's hooks, es7 async await syntax for clean, readable code. The backend is structured for development, testing and production environments and is ready to be hosted on Heroku.

## Demo

## Main technologies

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
<thead>
  <tr>
    <td class="tg-c3ow">Tech</td>
    <td class="tg-c3ow">Justification</td>
  </tr>

</thead>
<tbody>
  <tr>
    <th class="tg-c3ow" colspan="2">Front end</th>
  </tr>
  <tr>
    <td class="tg-0pky">React</td>
    <td class="tg-0pky">Used for its reusable component based structure, virtual DOM performance enhancements.</td>
  </tr>
  <tr>
    <td class="tg-0pky">React-redux</td>
    <td class="tg-0pky">A state management tool to allow non-unidirectional flow of state via props, allowing for more readable, maintainable and testable code</td>
  </tr>
  <tr>
    <th class="tg-c3ow" colspan="2">Back end</th>
  <tr>
    <td class="tg-0pky">Express</td>
    <td class="tg-0pky">Fast, popular and simplistic</td>
  </tr>
  <tr>
    <td class="tg-0pky">MongoDb</td>
    <td class="tg-0pky">The horizontal scaling power is probably not needed for the scope of this project. However, the JSON documenting is very intuitive and familiar allowing for quick manipulation of fields and structure using code.</td>
  </tr>
  <tr>
    <td class="tg-0pky">Node</td>
    <td class="tg-0pky">A well supported back-end environment. Able to handle any traditional web site back-end API service for the scope of this project.</td>
  </tr>
  <tr>
    <th class="tg-c3ow" colspan="2">Testing</th>
  <tr>
  <tr>
    <td class="tg-0pky">Supertest</td>
    <td class="tg-0pky">Allows testing of async API endpoints</td>
  </tr>
</tbody>
</table>

**Additional libraries**

- JWT webtoken
- babel
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
