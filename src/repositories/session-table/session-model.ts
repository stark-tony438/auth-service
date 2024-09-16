import * as mongoose from 'mongoose';
import ISessionModel from './ISessionModel';
import SessionSchema from './session-schema';

export const sessionSchema = new SessionSchema({
    collection: 'sessions'
});

export const sessionModel: mongoose.Model<ISessionModel> = mongoose.model<ISessionModel>(
    'sessions', sessionSchema, 'Sessions');