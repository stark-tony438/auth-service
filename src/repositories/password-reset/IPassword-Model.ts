import IVersionSchema from '../versionRepositories/IVersionSchema';

export default interface IPasswordResetModel extends IVersionSchema{
    id: string,
    userId: string,
    passwordHash: string,
}