"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentialModel = exports.credentialSchema = void 0;
const mongoose = require("mongoose");
const credential_schema_1 = require("./credential-schema");
exports.credentialSchema = new credential_schema_1.default({
    collection: 'credential'
});
exports.credentialModel = mongoose.model('credential', exports.credentialSchema, 'Credential');
//# sourceMappingURL=credential-model.js.map