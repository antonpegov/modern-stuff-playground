import { Document, Schema, Model, model} from "mongoose";
import { prop, Typegoose, ModelType, InstanceType } from 'typegoose';
import { autoIncrement } from 'mongoose-plugin-autoinc';
import ApiEvent from "./api-event";

export interface IApiEventModel extends ApiEvent, Document {
}

// export const ApiEventSchema: Schema = new Schema({
//   event: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   use: {
//     type: Number,
//     default: 0,
//   },
// }, {
//   timestamps: true,
// });

// ApiEventSchema.plugin(autoIncrement, { model: 'api-event', field: 'ApiEventID', startAt: 1 });
// ApiEventSchema.statics.findOneOrCreate = async function findOneOrCreate(condition) {
//   const self = this;
//   const result = await self.findOne(condition);
//   return result ? result : await self.create(condition);
// };

export const ApiEventModel: Model<IApiEventModel> = new ApiEvent().getModelForClass(ApiEvent);
