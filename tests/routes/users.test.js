import { expect } from 'chai'
import { describe, beforeEach, afterEach, it } from 'mocha'
import request from 'supertest'
import userMocks from '../userMocks'

import app from '../../src/app'
import { connectDb, closeDb } from '../../src/db/connectDb'

process.env.NODE_ENV = 'test'

beforeEach(async function () {
  await connectDb()
})

afterEach(async function () {
  await closeDb()
})

// describe('/users GET', () => {
//   it('responds with empty array when no users', () => {
//     request(app).get('/users', (req, res) => {
//       const responseLength = res.body.length
//       expect(responseLength).to.equal(0)
//     })
//   })
// })

it('OK, creating a new note works', () => {
  request(app).post('/auth/register', async (req, res) => {
    const body = await res.body
    console.log(body)
  })
})
