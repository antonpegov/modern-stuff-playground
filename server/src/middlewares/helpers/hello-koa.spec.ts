import { Server } from 'http';
import * as Koa from 'koa';
import app from '../../app';
import helloKoa from './hello-koa';
import chai = require('chai');
import supertest = require('supertest');

const expect = chai.expect;
const phrase = 'Hello Koa!';
let server: Server;
let request: supertest.SuperTest<supertest.Test>;

describe('helloKoa middlware test', () => {
  before(() => { 
    <Koa>app.use(helloKoa);
    server = app.listen(8888);
  })
  beforeEach(() => {
    request = supertest(server);
  });
  after(() => { server.close() })
  it(`Should return '${phrase}' to client browser`, async () => {
    await request
      .get('/')
      .expect((res) => {
        expect(res.text).to.be.not.equal('wtf4');
        expect(res.text).to.be.equal(phrase);
      })
      .expect(200)
  });
});
