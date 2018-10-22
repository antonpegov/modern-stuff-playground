import { Document, Schema, Model, model} from "mongoose";
import { autoIncrement } from 'mongoose-plugin-autoinc';
import { IUserEvent } from "./user-event";

export interface IUserEventModel extends IUserEvent, Document {
}

export const UserEventSchema: Schema = new Schema(
  { 
    title: String,
    text: String,
    ip: String
  }, 
  {
    timestamps: true,
  }
);

UserEventSchema.plugin(autoIncrement, { model: 'user-event', field: 'UserEventID', startAt: 1 });
// UserEventSchema.statics.findOneOrCreate = async function findOneOrCreate(condition) {
//   const self = this;
//   const result = await self.findOne(condition);
//   return result ? result : await self.create(condition);
// };

export const UserEventModel: Model<IUserEventModel> = model('user-event', UserEventSchema);
