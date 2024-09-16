import * as mongoose from 'mongoose';
import ICredentialModel from './ICredentialModel';
import CredentialSchema from './credential-schema';

export const credentialSchema = new CredentialSchema({
    collection: 'credential'
});

export const credentialModel: mongoose.Model<ICredentialModel> = mongoose.model<ICredentialModel>(
    'credential', credentialSchema, 'Credential');