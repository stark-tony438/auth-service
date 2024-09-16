"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionSchema_1 = require("../versionRepositories/VersionSchema");
class PasswordResetSchema extends VersionSchema_1.default {
    constructor(options) {
        const passwordResetSchema = {
            id: String,
            userId: String,
            passwordHash: String,
        };
        super(passwordResetSchema, options);
    }
}
exports.default = PasswordResetSchema;
//# sourceMappingURL=reset-schema.js.map