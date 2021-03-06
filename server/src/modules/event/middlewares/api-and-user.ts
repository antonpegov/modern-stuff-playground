import AppError from '../../../utils/app-errors.js';
import { ApiEventModel, IApiEventModel } from '../models/api-event.model';
import { UserEventModel, IUserEventModel } from '../models/user-event.model';
import ApiEvent from '../models/api-event.js';
import { Model, Document } from 'mongoose';

const properties = ['api', 'user'];
const collections = [ApiEventModel, UserEventModel];

const getType = (arr, prop) => {
  const allNumbers = arr.every((el) => (!isNaN(Number(el))));
  return (allNumbers) ? prop + 'ID' : prop;
};

const unType = (type) => {
  return (type.indexOf('ID')==-1)
    ? type + 'ID'
    : type.replace('ID', '');
};

const add = async (ctx, collectionId) => {
  const prop = properties[collectionId];
  const Collection: Model<Document> = collections[collectionId];
  if (ctx.request.header['content-type']!='application/json' &&
    ctx.request.header['content-type']!='application/x-www-form-urlencoded') throw new AppError(400, 10);
  if (!ctx.request.body[prop]) throw new AppError(406, 601);
  const propParsed = ctx.request.body[prop];
  if (!Array.isArray(propParsed)) throw new AppError(406, 600);
  if (!propParsed.every((el) => (isNaN(Number(el))))) throw new AppError(406, 602);
  return await Promise.all(
      propParsed.map(async (el) => (
        await Collection.create({[prop]: el})
      ))
  );
};

const del = async (ctx, collectionId) => {
  const prop = properties[collectionId];
  const Collection: Model<Document> = collections[collectionId];
  if (ctx.request.header['content-type']!='application/json' &&
    ctx.request.header['content-type']!='application/x-www-form-urlencoded') throw new AppError(400, 10);
  if (!ctx.request.body[prop]) throw new AppError(406, 601);
  const propParsed = ctx.request.body[prop];
  if (!Array.isArray(propParsed)) throw new AppError(406, 600);
  const type = getType(propParsed, prop);
  return await Collection.deleteMany({[type]: propParsed});
};

const find = async (ctx, collectionId) => {
  const prop = properties[collectionId];
  const Collection: Model<Document> = collections[collectionId];
  if (ctx.request.header['content-type']!='application/json' &&
    ctx.request.header['content-type']!='application/x-www-form-urlencoded') throw new AppError(400, 10);
  if (!ctx.request.body[prop]) throw new AppError(406, 601);
  const propParsed = ctx.request.body[prop];
  if (!Array.isArray(propParsed)) throw new AppError(406, 600);
  const type = getType(propParsed, prop);
  const preRet = await Collection.find({[type]: propParsed});
  return preRet.map((el) => (el[unType(type)]));
};

const edit = async (ctx, collectionId) => {
  const prop = properties[collectionId];
  const Collection: Model<Document> = collections[collectionId];
  if (ctx.request.header['content-type']!='application/json' &&
    ctx.request.header['content-type']!='application/x-www-form-urlencoded') throw new AppError(400, 10);
  if (!ctx.request.body[prop]) throw new AppError(406, 601);
  const propParsed = ctx.request.body[prop];
  if (!Array.isArray(propParsed)) throw new AppError(406, 600);
  if (propParsed.length != 2) throw new AppError(406, 600);
  return await Collection.update({ [prop]: propParsed[0] }, { [prop]: propParsed[1] });
};

const all = async (ctx, collectionId) => {
  const prop = properties[collectionId];
  const Collection: Model<Document> = collections[collectionId];
  const findRequest = (ctx.params.include)
    ? { [prop]: new RegExp(ctx.params.include, 'i') }
    : {};
  const lim = Number(ctx.query.limit);
  const ret = await Collection.find(findRequest).sort({ use: -1 }).limit(lim).select({
    _id: 0,
    __v: 0,
    use: 0,
  });
  // return ret;
  return ret.map((el) => (el[prop]));
};

const mocked = async (ctx, collection) => {
  return [
    {title: 'Test 1', date: Date.now()},
    {title: 'Test 2', date: Date.now()},
    {title: 'Test 3', date: Date.now()},
  ];
};

export default {
  add,
  del,
  find,
  edit,
  all,
  mocked,
};
