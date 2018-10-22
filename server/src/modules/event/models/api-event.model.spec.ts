import * as sinon from 'sinon';
import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
import { ApiEventModel, IApiEventModel } from './api-event.model';
import { connect, Model, Document } from 'mongoose';

const expect = chai.expect;
chai.use(sinonChai);

describe('ApiEventModel test', () => {

  const rnd = () => Math.floor(Math.random()*1000);
  let apiEvent: IApiEventModel;

  before(() => {
    connect('mongodb://localhost:27018/testing', { useNewUrlParser: true });
  });

  beforeEach(async () => {  
    // ApiEventModel.collection.drop(); 
  });

  afterEach(async () => {
    ApiEventModel.collection.drop();
  })

  it('Should be able to map data to mongoDb', async () => {
    apiEvent = new ApiEventModel({ 
      source: rnd(),
      title: 'Test Api Event ',
      text: 'This is test event from api-event.model.spec.ts'
    });
    await apiEvent.save();
    const event = await ApiEventModel.findOne({source: apiEvent.source});
    expect(event).to.exist;
    expect(event!.source).to.be.equal(apiEvent.source);
  });
});