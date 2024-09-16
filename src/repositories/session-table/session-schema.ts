import VersionSchema from '../versionRepositories/VersionSchema';
export default class SessionSchema extends VersionSchema  {
    constructor(options){
   const sessionSchema = {
       id: String,
       userId : String,
       loginTime: String,
       lastActivity: String
       }
       super(sessionSchema, options );
    }
}