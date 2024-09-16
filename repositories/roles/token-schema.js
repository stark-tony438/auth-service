"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionSchema_1 = require("../versionRepositories/VersionSchema");
class TokenSchema extends VersionSchema_1.default {
    constructor(options) {
        const tokenSchema = {
            id: String,
            userId: String,
            refreshToken: String,
            iat: String
        };
        super(tokenSchema, options);
    }
}
exports.default = TokenSchema;
//# sourceMappingURL=token-schema.js.map