"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("./UserController");
const userHandler = (0, express_1.Router)();
userHandler.post('/create', UserController_1.default.create);
userHandler.post('/login', UserController_1.default.login);
exports.default = userHandler;
//# sourceMappingURL=routes.js.map