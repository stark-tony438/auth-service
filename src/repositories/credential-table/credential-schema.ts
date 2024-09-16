import VersionSchema from '../versionRepositories/VersionSchema';
export default class CredentialSchema extends VersionSchema  {
    constructor(options){
        const credentialSchema = {
            id: String,
            userId: String,
            passwordHash: String,
            lastLogin: String,
        }
        super(credentialSchema, options);
    }
}