import VersionSchema from '../versionRepositories/VersionSchema';
export default class UserSchema extends VersionSchema  {
    constructor(options){
   const userSchema = {
       id: String,
       firstName: String,
       lastName : String,
       email: String,
       password: String,
       }
       super(userSchema, options );
    }
}