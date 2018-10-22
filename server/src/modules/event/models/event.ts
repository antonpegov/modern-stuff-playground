import { prop, Typegoose } from 'typegoose';

export default class Event extends Typegoose {
  @prop()
  text: String;
  @prop()
  title: String
}