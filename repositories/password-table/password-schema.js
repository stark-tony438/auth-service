"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionSchema_1 = require("../versionRepositories/VersionSchema");
class PasswordSchema extends VersionSchema_1.default {
    constructor(options) {
        const passwordSchema = {
            id: String,
            userId: String,
            passwordHash: String,
        };
        super(passwordSchema, options);
    }
}
exports.default = PasswordSchema;
//# sourceMappingURL=password-schema.js.map