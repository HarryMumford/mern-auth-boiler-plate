import chai from 'chai'
import chaiHttp from 'chai-http'
import { describe, it } from 'mocha'
import app from '../app'

chai.use(chaiHttp)
chai.should()

describe('users', () => {
  describe('GET /', () => {
    it('should get all users', (done) => {
      chai
        .request(app)
        .get('/users')
        .end((err, res) => {
          res.should.have.status(200)
          done()
        })
    })
  })
})
