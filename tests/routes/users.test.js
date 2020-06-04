import chai from 'chai'
import chaiHttp from 'chai-http'
import { it, beforeEach, describe } from 'mocha'
import User from '../../src/models/User'
import app from '../../server'

const { expect } = chai

chai.use(chaiHttp)

describe('Users', () => {
  beforeEach((done) => {
    User.remove({}, () => {
      done()
    })
  })
})

describe('GET /user', () => {
  it('it should GET all the users', (done) => {
    chai
      .request(app)
      .get('/users')
      .end((err, res) => {
        expect(res.status).to.equal(200)
        expect(res.body).to.be.an('array')
        done()
      })
  })
})
