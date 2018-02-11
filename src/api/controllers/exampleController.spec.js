import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import chaiJson from 'chai-json';
import { server } from './../../server';
import * as exampleController from './exampleController';

chai.use(chaiHttp);
chai.use(chaiJson);

describe('Example Controller', () => {
  before(function(done) {
    server.close();
    done();
  });

  describe('Smoke tests', () => {
    it('should exists the `example` method', () => {
      expect(exampleController.example).to.exist;
    });
  });


  context('example method', () => {
    it('should return whatever false when ...', () => {
      expect(true).to.be.true;
    });
  });
});
