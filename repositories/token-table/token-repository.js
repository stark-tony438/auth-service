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
const token_model_1 = require("./token-model");
const mongoose = require("mongoose");
const VersionRepository_1 = require("../versionRepositories/VersionRepository");
class TokenRepository extends VersionRepository_1.default {
    constructor() {
        super(token_model_1.tokenModel);
    }
    static generateObjectId() {
        return String(new mongoose.Types.ObjectId());
    }
    create(options) {
        const _super = Object.create(null, {
            create: { get: () => super.create }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.create.call(this, options);
        });
    }
    list(query = {}, options = {}) {
        const _super = Object.create(null, {
            list: { get: () => super.list }
        });
        return __awaiter(this, void 0, void 0, function* () {
            options.skip = Number(options.skip);
            options.limit = Number(options.limit);
            return _super.list.call(this, query, options);
        });
    }
    update(id, dataToUpdate = {}) {
        const _super = Object.create(null, {
            update: { get: () => super.update }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.update.call(this, id, dataToUpdate);
        });
    }
    delete(id) {
        const _super = Object.create(null, {
            delete: { get: () => super.delete }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.delete.call(this, id);
        });
    }
    get(data) {
        const _super = Object.create(null, {
            get: { get: () => super.get }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.get.call(this, Object.assign({}, data));
        });
    }
}
exports.default = TokenRepository;
//# sourceMappingURL=token-repository.js.map