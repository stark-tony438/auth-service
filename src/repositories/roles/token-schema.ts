import VersionSchema from '../versionRepositories/VersionSchema';
export default class TokenSchema extends VersionSchema  {
    constructor(options){
    const tokenSchema = {
       id: String,
       userId : String,
       refreshToken: String,
       iat: String
      }
       super(tokenSchema, options );
    }
}