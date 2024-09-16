"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionSchema_1 = require("../versionRepositories/VersionSchema");
class SessionSchema extends VersionSchema_1.default {
    constructor(options) {
        const sessionSchema = {
            id: String,
            userId: String,
            loginTime: String,
            lastActivity: String
        };
        super(sessionSchema, options);
    }
}
exports.default = SessionSchema;
//# sourceMappingURL=session-schema.js.map