"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes_1 = require("./controller/User/routes");
const routeHandler = (0, express_1.Router)();
routeHandler.use('/user', routes_1.default);
exports.default = routeHandler;
//# sourceMappingURL=routes.js.map