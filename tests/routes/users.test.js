import chai from 'chai'
import chaiHttp from 'chai-http'
import { it, beforeEach, describe } from 'mocha'
import User from '../../src/models/User'
import app from '../../server'
'

const { expect } = chai

chai.use(chaiHttp)

describe('Users', () => {
  beforeEach((done) => {
    User.collection.drop({}, () => {
      done()
    })
  })

  describe('GET /user', () => {
    it('it should respond with empty array if no users', (done) => {
      chai
        .request(app)
        .get('/users')
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res.body).to.be.an('array')
          expect(res.body.length).to.equal(0)
          done()
        })
    })
    it('it should get one user', (done) => {
      const user = new User({ name: 'Harry', email: 'harry@harry.com', password: 'harry'})
      
      user.save((err) => {
        if (err) { console.log(err) }
      })
      
      chai
        .request(app)
        .get('/users')
        .end((err, res) => {
          expect(res.status).to.equal(200)
          expect(res.body).to.be.an('array')
          expect(res.body.length).to.equal(0)
          done()
        })
    })
  })
})
