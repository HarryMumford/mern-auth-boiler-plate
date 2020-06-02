import { expect } from 'chai'
import { describe, beforeEach, afterEach, it } from 'mocha'
import request from 'supertest'
import userMocks from '../userMocks'

import app from '../../src/app'
import { connectDb, closeDb } from '../../src/db/connectDb'

process.env.NODE_ENV = 'test'

beforeEach(async () => {
  await connectDb()
})

afterEach(async () => {
  await closeDb()
})

describe('/users GET', function () {
  it('responds with empty array when no users', (done) => {
    request(app)
      .get('/users')
      .then((res) => {
        expect(res.body.length).to.equal(0)
        done()
      })
      .catch((err) => done(err))
  })
})
