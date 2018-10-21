import * as Koa from 'koa';
import app from './app';
import * as sinon from 'sinon';
import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
import { Server } from 'http';

const expect = chai.expect;
chai.use(sinonChai);

describe('App module test', () => {
  let server;//: sinon.SinonFakeServer;
  before(() => {
    server = sinon.fakeServer.create();
  });
  it(`Should have 'start' method`, () => {
    expect(app).has.property('start');
  });
  it('It should run initialization, and then connect the middlewares and routing modules', () => {
    const spies = [sinon.spy(), sinon.spy(), sinon.spy()];
    sinon.spy(app, 'use');
    app.start(server, spies[0], spies[1], spies[2]).then(() => {
      expect(spies[0]).to.be.calledOnceWith(server);
      expect(spies[1]).to.be.calledOnce;
      expect(app.use).to.be.calledOnceWith(spies[2]);
    }
  });
});