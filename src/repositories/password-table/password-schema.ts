import VersionSchema from '../versionRepositories/VersionSchema';
export default class PasswordSchema extends VersionSchema  {
    constructor(options){
        const passwordSchema = {
            id: String,
            userId: String,
            passwordHash: String,
        }
        super(passwordSchema, options);
    }
}