"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordModel = exports.passwordSchema = void 0;
const mongoose = require("mongoose");
const password_schema_1 = require("./password-schema");
exports.passwordSchema = new password_schema_1.default({
    collection: 'password'
});
exports.passwordModel = mongoose.model('password', exports.passwordSchema, 'Passwords');
//# sourceMappingURL=password-model.js.map