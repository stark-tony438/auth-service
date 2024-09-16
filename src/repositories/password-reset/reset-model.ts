import * as mongoose from 'mongoose';
import IPasswordResetModel from './IPassword-Model';
import PasswordResetSchema from './reset-schema';

export const passwordResetSchema = new PasswordResetSchema({
    collection: 'password-reset'
});

export const passwordResetModel: mongoose.Model<IPasswordResetModel> = mongoose.model<IPasswordResetModel>(
    'password-reset', passwordResetSchema, 'Password-reset');