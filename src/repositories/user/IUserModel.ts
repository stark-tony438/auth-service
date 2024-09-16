import IVersionSchema from '../versionRepositories/IVersionSchema';

export default interface IUserModel extends IVersionSchema{
    id: string;
    firstName: string;
    secondName: string;
    email: string;
    password: string;
}