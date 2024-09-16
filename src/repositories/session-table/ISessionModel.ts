import IVersionSchema from '../versionRepositories/IVersionSchema';

export default interface ISessionModel extends IVersionSchema{
    id: string,
    userId: string,
    loginTime: string,
    lastActivity: string
}