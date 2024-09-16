import IVersionSchema from '../versionRepositories/IVersionSchema';

export default interface ITokenModel extends IVersionSchema {
    id: string,
    userId: string,
    refreshToken: string,
    iat: string
}