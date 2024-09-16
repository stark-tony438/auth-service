import { tokenModel } from './token-model';
import * as mongoose from 'mongoose';
import ITokenModel from './ITokenModel';
import VersionRepository from '../versionRepositories/VersionRepository';

export default class TokenRepository extends VersionRepository<ITokenModel, mongoose.Model<ITokenModel>> {

  private tokenModel: mongoose.Model<ITokenModel>;

  constructor() {
    super(tokenModel);
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