import * as sinon from 'sinon';
import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';
import { UserEventModel, IUserEventModel } from './user-event.model';
import { connect, connection } from 'mongoose';

const expect = chai.expect;
chai.use(sinonChai);

describe('ApiEventModel test', () => {

  const rnd = () => Math.floor(Math.random()*1000);
  let userEvent: IUserEventModel;

  before(async () => {
    await connect('mongodb://localhost:27018/testing', { useNewUrlParser: true });
  });

  beforeEach(async () => {  
    // UserEventModel.collection.drop(); 
  });

  afterEach(async () => {
    UserEventModel.collection.drop();
  })

  it('Should be able to map data to mongoDb', async () => {
    userEvent = new UserEventModel({ 
      ip: 'JohnDoe' + rnd(),
      title: 'Test User Event ' + rnd(),
      text: 'This is test event from user-event.model.spec.ts'
    });
    await userEvent.save();
    const event = await UserEventModel.findOne({ip: userEvent.ip});
    expect(event).to.exist;
    expect(event!.ip).to.be.equal(userEvent.ip);
  });
});