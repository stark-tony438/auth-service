import * as mongoose from 'mongoose';
import IUserModel from './ITokenModel';
import TokenSchema from './token-schema';

export const tokenSchema = new TokenSchema({
    collection: 'token'
});

export const tokenModel: mongoose.Model<IUserModel> = mongoose.model<IUserModel>(
    'token', tokenSchema, 'Token');