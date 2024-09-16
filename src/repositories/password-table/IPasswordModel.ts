import IVersionSchema from '../versionRepositories/IVersionSchema';

export default interface IPasswordModel extends IVersionSchema{
    id: string,
    userId: string,
    passwordHash: string,
}