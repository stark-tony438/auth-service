"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenModel = exports.tokenSchema = void 0;
const mongoose = require("mongoose");
const token_schema_1 = require("./token-schema");
exports.tokenSchema = new token_schema_1.default({
    collection: 'token'
});
exports.tokenModel = mongoose.model('token', exports.tokenSchema, 'Token');
//# sourceMappingURL=token-model.js.map