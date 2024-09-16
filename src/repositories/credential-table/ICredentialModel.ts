import IVersionSchema from '../versionRepositories/IVersionSchema';

export default interface IUserModel extends IVersionSchema{
    id: string,
    userId: string,
    passwordHash: string,
    lastLogin: string,
}