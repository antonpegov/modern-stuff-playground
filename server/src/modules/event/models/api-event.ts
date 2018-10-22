import Event from './event';
import { prop } from 'typegoose';

export default class ApiEvent extends Event {
  @prop()
  source: String
}