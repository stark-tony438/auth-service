"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionModel = exports.sessionSchema = void 0;
const mongoose = require("mongoose");
const session_schema_1 = require("./session-schema");
exports.sessionSchema = new session_schema_1.default({
    collection: 'sessions'
});
exports.sessionModel = mongoose.model('sessions', exports.sessionSchema, 'Sessions');
//# sourceMappingURL=session-model.js.map