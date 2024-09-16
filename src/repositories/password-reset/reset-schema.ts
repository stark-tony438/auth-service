import VersionSchema from '../versionRepositories/VersionSchema';
export default class PasswordResetSchema extends VersionSchema  {
    constructor(options){
        const passwordResetSchema = {
            id: String,
            userId: String,
            passwordHash: String,
        }
       super(passwordResetSchema, options );
    }
}