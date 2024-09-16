"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class VersionRepository {
    constructor(modelType) {
        this.modelType = modelType;
    }
    static generateObjectId() {
        return String(new mongoose.Types.ObjectId());
    }
    create(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = VersionRepository.generateObjectId();
            return this.modelType.create(Object.assign(Object.assign({}, options), { id }));
        });
    }
    list(query = {}, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.modelType.find(query, {}, options);
        });
    }
    update(id, dataToUpdate = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.modelType.findOneAndUpdate({ _id: id }, dataToUpdate);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.modelType.findOneAndDelete({ _id: id });
        });
    }
    get(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.modelType.findOne(Object.assign({}, data)).lean();
        });
    }
}
exports.default = VersionRepository;
//# sourceMappingURL=VersionRepository.js.map