import { sessionModel } from './session-model';
import * as mongoose from 'mongoose';
import ISessionModel from './ISessionModel';
import VersionRepository from '../versionRepositories/VersionRepository';

export default class SessionRepository extends VersionRepository<ISessionModel, mongoose.Model<ISessionModel>> {

  private sessionModal: mongoose.Model<ISessionModel>;

  constructor() {
    super(sessionModel);
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