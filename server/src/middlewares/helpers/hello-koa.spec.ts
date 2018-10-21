import * as Koa from 'koa';
import app from '../../app';
import helloKoa from './hello-koa';
import { Server } from 'http';
import chai = require('chai');
import supertest = require('supertest');

const expect = chai.expect;
const phrase = 'Hello Koa!';
let server: Server;
let request: supertest.SuperTest<supertest.Test>;

describe('helloKoa middlware test', () => {
  const throwIfError = (err, res) => { if (err) throw err }
  before(() => { 
    <Koa>app.use(helloKoa);
    server = app.listen(8888) 
  })
  beforeEach(() => {
    request = supertest(server);
  });
  after(() => { server.close() })
  it(`Should return '${phrase}' to client browser`, () => {
    request
      .get('/')
      .expect((res) => {
        expect(res.text).to.be.not.equal('wtf');
        expect(res.text).to.be.equal(phrase);
      })
      .expect(200)
      .end(throwIfError)
  });
});
