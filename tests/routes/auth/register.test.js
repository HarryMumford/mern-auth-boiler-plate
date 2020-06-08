import chai from 'chai'
import chaiHttp from 'chai-http'
import { it, beforeEach, describe } from 'mocha'
import User from '../../../src/models/User'
import app from '../../../server'
import userMocks from '../../userMocks'

const { expect } = chai

chai.use(chaiHttp)

describe('Auth', () => {
  beforeEach((done) => {
    User.collection.drop(() => {
      done()
    })
  })

  describe('POST auth/register', () => {
    it('it should successfully register a user', (done) => {
      const user = userMocks[0]

      chai
        .request(app)
        .post('/auth/register')
        .send(user)
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res.body).to.be.an('object')
          expect(res.body).to.include.keys('token', 'user')
          expect(res.body.user).to.include.keys('id', 'name', 'email')
          done()
        })
    })
    it('it should fail to register the same user twice', (done) => {
      const user = userMocks[0]

      chai
        .request(app)
        .post('/auth/register')
        .send(user)
        .end(() => {
          chai
            .request(app)
            .post('/auth/register')
            .send(user)
            .end((err, res) => {
              expect(res.status).to.equal(400)
              expect(res.body.error).to.equal('User already exists')
              done()
            })
        })
    })
  })
})
