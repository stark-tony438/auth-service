import * as mongoose from 'mongoose';
export default class VersionRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    private modelType: M;

    constructor(modelType) {
        this.modelType = modelType;
    }
    static generateObjectId() {

        return String(new mongoose.Types.ObjectId());
    }
    async create(options: object) : Promise<D>{
        const id = VersionRepository.generateObjectId();
        return this.modelType.create({
            ...options,
            id 
        });
    }

    async list(query: any = {}, options: any = {}) {

        return this.modelType.find(query, {}, options);
    }

    async update(id: any, dataToUpdate: any = {}) {

        return this.modelType.findOneAndUpdate({ _id: id }, dataToUpdate);
    }

    async delete(id: any) {

        return this.modelType.findOneAndDelete({ _id: id })
    }

    async get(data: object) {

        return this.modelType.findOne({ ...data }).lean();
    }
}