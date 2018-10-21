import * as Koa from 'koa';
import app from './app';
import chai = require('chai');
const expect = chai.expect;

describe('App module test', () => {
  it(`Should have 'start' method`, () => {
    expect(app).has.property('start');
  });
  it('Shold be tested', () => {
    
  });
});