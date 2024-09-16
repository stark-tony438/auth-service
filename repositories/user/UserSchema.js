"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const VersionSchema_1 = require("../versionRepositories/VersionSchema");
class UserSchema extends VersionSchema_1.default {
    constructor(options) {
        const userSchema = {
            id: String,
            firstName: String,
            lastName: String,
            email: String,
            password: String,
        };
        super(userSchema, options);
    }
}
exports.default = UserSchema;
//# sourceMappingURL=UserSchema.js.map