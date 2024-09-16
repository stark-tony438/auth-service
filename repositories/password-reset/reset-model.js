"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordResetModel = exports.passwordResetSchema = void 0;
const mongoose = require("mongoose");
const reset_schema_1 = require("./reset-schema");
exports.passwordResetSchema = new reset_schema_1.default({
    collection: 'password-reset'
});
exports.passwordResetModel = mongoose.model('password-reset', exports.passwordResetSchema, 'Password-reset');
//# sourceMappingURL=reset-model.js.map