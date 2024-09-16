import { passwordModel } from './password-model';
import * as mongoose from 'mongoose';
import IPasswordModel from './IPasswordModel';
import VersionRepository from '../versionRepositories/VersionRepository';

export default class PasswordRepository extends VersionRepository<IPasswordModel, mongoose.Model<IPasswordModel>> {

  private passwordModel: mongoose.Model<IPasswordModel>;

  constructor() {
    super(passwordModel);
  }

  static generateObjectId() {

    return String(new mongoose.Types.ObjectId());
  }

  async create(options: object) {
     
    return super.create(options);
  
  }

  async list(query: any = {}, options: any = {}) {
    options.skip = Number(options.skip);
    options.limit = Number(options.limit);
    return super.list(query, options);
  }

  async update(id: string, dataToUpdate: any = {}) {

    return super.update(id, dataToUpdate);
  }

  async delete(id: string) {

    return super.delete(id);
  }

  async get(data: object) {

    return super.get({ ...data });
  }
}