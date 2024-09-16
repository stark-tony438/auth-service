import * as mongoose from 'mongoose';
import IPasswordModel from './IPasswordModel';
import PasswordSchema from './password-schema';

export const passwordSchema = new PasswordSchema({
    collection: 'password'
});

export const passwordModel: mongoose.Model<IPasswordModel> = mongoose.model<IPasswordModel>(
    'password', passwordSchema, 'Passwords');