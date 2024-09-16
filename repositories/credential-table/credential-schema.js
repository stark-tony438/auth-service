"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionSchema_1 = require("../versionRepositories/VersionSchema");
class CredentialSchema extends VersionSchema_1.default {
    constructor(options) {
        const credentialSchema = {
            id: String,
            userId: String,
            passwordHash: String,
            lastLogin: String,
        };
        super(credentialSchema, options);
    }
}
exports.default = CredentialSchema;
//# sourceMappingURL=credential-schema.js.map