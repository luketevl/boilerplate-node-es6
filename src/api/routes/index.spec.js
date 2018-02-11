import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import chaiJson from 'chai-json';
import { server } from './../../server';

chai.use(chaiHttp);
chai.use(chaiJson);

describe('Routes', () => {
  before(function(done) {
    server.close();
    done();
  });

  context('Routes to Example (/example)', () => {
    it('should exists verb POST ', (done) => {
      chai.request(server)
        .post('/example')
        .end((err, res) => {
          expect(res).have.status(204);
          done();
        });
    });
  });
});
